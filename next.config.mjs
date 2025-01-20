/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.mycdn.me', 
            },
        ]
    },
};

export default nextConfig;
