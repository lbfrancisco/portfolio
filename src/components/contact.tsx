'use client'

import { motion } from 'framer-motion'
import { CalendarDaysIcon, GraduationCapIcon, MailIcon } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
	return (
		<motion.section
			id="contact"
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
			className="py-24 border-t border-zinc-900"
		>
			<div className="max-w-[1280px] mx-auto space-y-6">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="text-4xl font-bold text-zinc-100 leading-tight text-center"
				>
					Vamos conversar!
				</motion.h2>
				<div className="space-y-6">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="text-lg text-zinc-400 text-center max-w-2xl mx-auto"
					>
						Estou sempre aberto a novas oportunidades e colaborações. Se você
						tem um projeto interessante ou apenas quer bater um papo, não hesite
						em me mandar uma mensagem! Você pode me encontrar nas redes sociais
						ou enviar um e-mail para mim. Estou ansioso para ouvir de você!
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						className="flex justify-center items-center gap-6"
					>
						<Link
							href="mailto:lucasbarroso318@gmail.com"
							className="flex items-center justify-center gap-2 text-sm font-bold px-6 py-2 cursor-pointer rounded-full bg-sky-400 border border-sky-300 text-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-sky-400/90"
						>
							<MailIcon className="size-6" />
							Envie um e-mail
						</Link>
					</motion.div>
				</div>
			</div>
		</motion.section>
	)
}
