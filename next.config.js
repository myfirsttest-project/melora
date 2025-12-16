const path = require("path");
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
    disable: process.env.NODE_ENV === "development",
    buildExcludes: [/\/_next\//], // <-- ignore _next files
    fallbacks: {
        document: "/offline.html",    // offline fallback
    },
    additionalManifestEntries: [
        { url: "/index.html", revision: "1" },
        { url: "/", revision: "1" },
        { url: "/event/index.html", revision: "1" },
        { url: "/about/index.html", revision: "1" },
        { url: "/program/index.html", revision: "1" },
        { url: "/admission/index.html", revision: "1" },
    ],
});


const nextConfig = {
    output: "export",
    trailingSlash: true,   // ✅ ADD THIS
    images: { unoptimized: true },
    webpack: (config) => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        };
        return config;
    },
    outputFileTracingRoot: path.join(__dirname),
};

module.exports = withPWA(nextConfig);
