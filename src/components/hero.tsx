'use client'

import Link from 'next/link'
import CycleText from './animata/text/cycle-text'
import { Badge } from './ui/badge'

import { motion } from 'framer-motion'

import { DownloadIcon } from 'lucide-react'

export default function Hero() {
	return (
		<motion.section
			id="home"
			initial="hidden"
			animate="visible"
			variants={{
				hidden: { opacity: 0, y: 50 },
				visible: {
					opacity: 1,
					y: 0,
					transition: { duration: 0.6, ease: 'easeOut' },
				},
			}}
			className="max-w-[1280px] mx-auto space-y-6 pt-32 pb-24"
		>
			<motion.div
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<Badge variant="outline">Full-stack Developer</Badge>
			</motion.div>

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="text-5xl font-bold text-zinc-100 leading-tight"
			>
				<p>Sou um desenvolvedor que encara</p>
				<p>desafios e transforma isso em</p>
				<CycleText />
				<span className="italic text-sm text-zinc-300">
					"Penso, logo codifico."
				</span>
			</motion.h1>
			<motion.div
				initial={{ opacity: 0, scale: 1.1 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="flex items-center gap-4"
			>
				<Link
					href=""
					download="curriculo-lucas-francisco.pdf"
					className="flex items-center justify-center gap-2 text-sm font-bold px-6 py-2 cursor-pointer rounded-full bg-sky-400 border border-sky-300 text-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-sky-400/90"
				>
					<DownloadIcon className="size-4" />
					Currículo
				</Link>
			</motion.div>
		</motion.section>
	)
}
