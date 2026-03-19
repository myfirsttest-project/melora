const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // for static HTML export
  trailingSlash: true,       // adds trailing slashes to URLs
  images: { unoptimized: true }, // disables image optimization

  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
   turbopack: {},
};

module.exports = nextConfig;