'use client'

import { motion } from 'framer-motion'
import { DownloadIcon } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
	return (
		<motion.nav
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-zinc-900"
		>
			<div className="max-w-screen-xl mx-auto w-full flex items-center justify-center md:justify-between p-6">
				<ul className="hidden md:flex md:items-center md:gap-6 md:text-zinc-300 md:font-medium md:text-sm">
					<li>
						<Link href="#home" className="hover:text-sky-400 transition-colors">
							Início
						</Link>
					</li>
					<li>
						<Link
							href="#about-me"
							className="hover:text-sky-400 transition-colors"
						>
							Sobre mim
						</Link>
					</li>
					<li>
						<Link
							href="#academy"
							className="hover:text-sky-400 transition-colors"
						>
							Formação
						</Link>
					</li>
					<li>
						<Link
							href="#projects"
							className="hover:text-sky-400 transition-colors"
						>
							Projetos
						</Link>
					</li>
					<li>
						<Link
							href="#contact"
							className="hover:text-sky-400 transition-colors"
						>
							Contato
						</Link>
					</li>
				</ul>
				<Link
					href=""
					download="curriculo-lucas-francisco.pdf"
					className="flex items-center justify-center gap-2 text-sm font-bold px-6 py-2 cursor-pointer rounded-full border border-transparent text-sky-400 transition-colors duration-300 hover:bg-sky-400/20 hover:border-sky-400/40"
				>
					<DownloadIcon size={16} />
					Currículo
				</Link>
			</div>
		</motion.nav>
	)
}
