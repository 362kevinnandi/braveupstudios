/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
            {
                hostname: 'localhost',
                pathname: '**',
                port: '3000',
				protocol: 'http',
			},
		],
		eslint: {
			ignoreDuringBuilds: true
		}
	},
};

module.exports = nextConfig;