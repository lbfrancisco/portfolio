'use client'

import Link from 'next/link'
import CycleText from './animata/text/cycle-text'
import { Badge } from './ui/badge'

import { motion } from 'framer-motion'

import { ArrowDown, DownloadIcon } from 'lucide-react'
import LinkButton from './link-button'
import Grid from './animata/background/grid'
import Image from 'next/image'

import image from '../assets/prj_portfolio.png'

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
			className="max-w-[1280px] mx-auto py-64"
		>
			<div className="relative space-y-6">
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
					<LinkButton
						download="curriculo-lucas-francisco.pdf"
						href="/curriculo-lucas-francisco.pdf"
					>
						<DownloadIcon className="size-4" />
						Currículo
					</LinkButton>
				</motion.div>
			</div>

			<motion.div
				className="absolute bottom-30 left-1/2 transform -translate-x-1/2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, y: [0, 10, 0] }}
				transition={{
					duration: 1.5,
					delay: 1,
					repeat: Number.POSITIVE_INFINITY,
				}}
			>
				<ArrowDown className="h-6 w-6 text-muted-foreground" />
			</motion.div>

			<div className="absolute inset-0 -z-1">
				<div className="absolute top-20 left-10 h-36 w-36 bg-primary/20 rounded-full blur-3xl" />
				<div className="absolute bottom-20 right-10 h-64 w-64 bg-emerald-500/10 rounded-full blur-3xl" />
				<div className="absolute top-1/3 right-1/3 h-48 w-48 bg-sky-500/10 rounded-full blur-3xl" />
				<Grid
					className="absolute -top-15 -right-0 h-full w-full bg-sky-500/10"
					color="#111111"
					style={{
						opacity: 0.1,
						backgroundColor: 'transparent',
					}}
					size={15}
				>
					{' '}
				</Grid>
			</div>
		</motion.section>
	)
}
