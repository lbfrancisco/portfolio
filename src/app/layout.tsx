export const metadata = {
	title: 'Lucas Francisco | @lbfrancisco',
	description: 'asdf',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-BR">
			<body>{children}</body>
		</html>
	)
}
