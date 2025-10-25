const path = require("path");

const nextConfig = {
    outputFileTracingRoot: path.join(__dirname),

    images: {
        unoptimized: true,
        domains: [], // add any external domains if used
        qualities: [75, 80, 85, 90, 95, 100], // include all qualities you use
    },

    webpack: (config) => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        };
        return config;
    },
};

module.exports = nextConfig;