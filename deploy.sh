#!/bin/bash
set -euo pipefail

APP_NAME="melora-kindergarten"
APP_IMAGE="${APP_NAME}:latest"

# === Helper functions ===
cleanup_host_disk() {
    echo "=== Checking host disk usage ==="
    USAGE=$(df / | tail -1 | awk '{print $5}' | tr -d '%')
    echo "Host root partition usage: ${USAGE}%"
    if [ "$USAGE" -gt 85 ]; then
        echo "⚠️  Host disk usage high. Running safe cleanup..."
        sudo apt-get clean
        sudo apt-get autoremove -y
        docker system prune -af || true
        docker volume prune -f || true
        sudo rm -rf /tmp/*
        echo "✅ Host cleanup finished."
    fi
}

check_minikube_disk() {
    echo "=== Checking Minikube disk space ==="
    USAGE=$(minikube ssh -- "df -h / | tail -1 | awk '{print \$5}'" | tr -d '%')
    echo "Minikube root partition usage: ${USAGE}%"
    if [ "$USAGE" -gt 85 ]; then
        echo "⚠️  Minikube disk usage high. Running cleanup..."
        minikube ssh -- "docker system prune -af || true"
        minikube ssh -- "rm -rf /var/lib/docker/tmp/* || true"
        echo "✅ Minikube cleanup finished."
    fi
}

cleanup_k8s() {
    echo "=== Cleaning up old Kubernetes resources ==="
    kubectl delete deployment "$APP_NAME" --ignore-not-found
    kubectl delete service "$APP_NAME" --ignore-not-found
    echo "✅ Old resources cleaned."
}

build_app_image() {
    echo "=== Switching Docker to Minikube’s daemon ==="
    eval "$(minikube -p minikube docker-env)"
    echo "=== Building app image directly inside Minikube ==="
    docker build -t "$APP_IMAGE" -f .dockerfile .
    echo "✅ Image built: $APP_IMAGE"
}

deploy_k8s() {
    echo "=== Applying Kubernetes manifests ==="
    kubectl apply -f k8s/
    echo "=== Waiting for deployment rollout ==="
    kubectl rollout status deployment/"$APP_NAME" --timeout=120s
}

expose_service() {
    echo "=== Checking service type for $APP_NAME ==="
    TYPE=$(kubectl get svc "$APP_NAME" -o jsonpath='{.spec.type}')

    if [ "$TYPE" == "ClusterIP" ]; then
        echo "ℹ️  Service is ClusterIP. Using 'minikube service' to tunnel..."
        minikube service "$APP_NAME"
    elif [ "$TYPE" == "NodePort" ]; then
        NODE_PORT=$(kubectl get svc "$APP_NAME" -o jsonpath='{.spec.ports[0].nodePort}')
        NODE_IP=$(minikube ip)
        echo "✅ Service exposed at: http://$NODE_IP:$NODE_PORT"
    else
        echo "⚠️  Service type $TYPE detected. Please check manually."
    fi
}

# === Main ===
cleanup_host_disk
check_minikube_disk
cleanup_k8s
build_app_image
deploy_k8s
expose_service
