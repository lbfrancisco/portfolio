'use client'

import { motion } from 'framer-motion'
import { MailIcon } from 'lucide-react'
import LinkButton from './link-button'

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
						className="text-zinc-400 text-center max-w-2xl mx-auto"
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
						<LinkButton href="mailto:lucasbarroso318@gmail.com">
							<MailIcon className="size-6" />
							Envie um e-mail
						</LinkButton>
					</motion.div>
				</div>
			</div>
		</motion.section>
	)
}
