import type { Metadata } from 'next'
import { Geist, Inter } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const interSans = Inter({
	variable: '--font-inter-sans',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Lucas Francisco | Portifólio',
	description: 'Portifólio de Lucas Francisco, desenvolvedor Full-stack',
	icons: {
		icon: '/favicon.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`${geistSans.variable} ${interSans.variable} min-h-screen m-0 overflow-x-hidden overflow-y-auto antialiased dark`}
			>
				{children}
			</body>
		</html>
	)
}
