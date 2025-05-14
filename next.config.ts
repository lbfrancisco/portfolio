import type { NextConfig } from 'next'

const nextConfig = {
	webpack(config: NextConfig) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'], // Adiciona suporte ao SVGR
		})
		return config
	},
}

module.exports = nextConfig
