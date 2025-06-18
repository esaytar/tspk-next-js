/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    webpack(config) {
        config.module.rules.push({
          test: /\.(mp4|webm|ogg)$/i,
          type: "asset/resource",
        });
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.mycdn.me', 
            },
        ]
    },
    images: {
        unoptimized: false,
    },
};

export default nextConfig;
