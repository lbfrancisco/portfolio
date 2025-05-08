import Link from 'next/link'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export default function Footer() {
	return (
		<div className="border-t boder-zinc-900">
			<div className="max-w-[1280px] mx-auto flex items-center justify-between py-8 px-4">
				<div className="text-sm font-medium text-zinc-400">
					<span>© 2025 Lucas Francisco. Todos os direitos reservados.</span>
				</div>
				<div className="flex items-center gap-4">
					<Link
						href="https://www.github.com/lbfrancisco/"
						target="_blank"
						className="hover:text-purple-500 transition-colors duration-300"
					>
						<SiGithub className="size-6" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/lbfrancisco/"
						target="_blank"
						className="hover:text-sky-500 transition-colors duration-300"
					>
						<SiLinkedin className="size-6" />
					</Link>
				</div>
			</div>
		</div>
	)
}
