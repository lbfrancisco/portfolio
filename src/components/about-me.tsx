'use client'

import Image from 'next/image'

import me from '../assets/me.jpg'

import { motion } from 'framer-motion'
import Stacks from './stacks'

export default function AboutMe() {
	return (
		<motion.section
			id="about-me"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			variants={{
				hidden: { opacity: 0, y: 50 },
				visible: {
					opacity: 1,
					y: 0,
					transition: { duration: 0.6, ease: 'easeOut' },
				},
			}}
			className="py-24 bg-zinc-900/20 border-t border-zinc-900"
		>
			<div className="max-w-[1280px] mx-auto">
				<div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-4xl font-bold text-zinc-100 leading-tight text-center"
					>
						Sobre mim
					</motion.h2>

					<div className="flex items-center justify-between gap-8 mt-8">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<Image
								src={me}
								width={768}
								height={768}
								alt=""
								className="rounded-full"
							/>
						</motion.div>
						<div className="space-y-8">
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="text-zinc-400"
							>
								Sou desenvolvedor Full-Stack com foco em Back-end, apaixonado
								por transformar ideias complexas em soluções simples, intuitivas
								e funcionais. Estudo e pratico desenvolvimento há mais de 3
								anos, sempre buscando evoluir e encarar novos desafios, mesmo
								sem experiência em produção ainda. Acredito no poder da
								tecnologia para resolver problemas reais — especialmente no
								universo logístico, que me fascina pela complexidade e pela
								chance de criar soluções práticas. Fora do código, me encontro
								em boas histórias: seja em séries, animes ou livros.
							</motion.p>
						</div>
					</div>
				</div>
				<div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-4xl font-bold text-zinc-100 leading-tight text-center"
					>
						Tecnologias
					</motion.h2>

					<Stacks />
				</div>
			</div>
		</motion.section>
	)
}
