/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",        // static export
    trailingSlash: true,     // adds / at the end of URLs
    images: {
        unoptimized: true,     // needed for static export
    },
 };
module.exports = nextConfig;
