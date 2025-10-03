# 1. Build Docker image
docker build -t melora-kindergarten:latest . -f /home/vagrant/IdeaProjects/melora-school/.dockerfil

# 2. Test container locally
docker run -p 3000:3000 melora-kindergarten:latest

# 3. Apply Kubernetes manifests
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

# 4. Check pods and service
kubectl get pods
kubectl get svc