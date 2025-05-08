'use client'

import { motion } from 'framer-motion'
import { CalendarDaysIcon, GraduationCapIcon } from 'lucide-react'

export default function Academy() {
	return (
		<motion.section
			id="academy"
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
			className="py-24 bg-zinc-950 border-t border-zinc-900"
		>
			<div className="max-w-[1280px] mx-auto space-y-6">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="text-4xl font-bold text-zinc-100 leading-tight text-center"
				>
					Formação acadêmica
				</motion.h2>
				<div className="flex justify-center items-stretch gap-6">
					<div className="flex-1 border rounded-md p-4 bg-zinc-900/30 space-y-4 min-h-[250px] max-w-[450px] hover:border-zinc-100 transition-colors duration-700 ease-in-out">
						<div className="flex items-center gap-2">
							<div className="bg-zinc-800 p-2 rounded-md self-start">
								<GraduationCapIcon className="w-6 h-6 text-zinc-100" />
							</div>
							<div>
								<h3 className="text-lg font-bold text-zinc-300">
									Análise e desenvolvimento de sistemas
								</h3>
								<span className="text-zinc-400">Uninter</span>
							</div>
						</div>
						<div className="rounded-md flex items-center gap-2 text-zinc-400">
							<CalendarDaysIcon className="w-4 h-4 text-zinc-400" />
							<span className="text-sm">2025 - 2027</span>
						</div>
						<span className="text-sm text-zinc-400">
							Graduação focada em criar sistemas: programação, banco de dados,
							web, mobile, engenharia de software e segurança da informação.
						</span>
					</div>
					<div className="flex-1 border rounded-md p-4 bg-zinc-900/30 space-y-4 min-h-[250px] max-w-[450px] hover:border-zinc-100 transition-colors duration-700 ease-in-out">
						<div className="flex items-center gap-2">
							<div className="bg-zinc-800 p-2 rounded-md self-start">
								<GraduationCapIcon className="w-6 h-6 text-zinc-100" />
							</div>
							<div>
								<h3 className="text-lg font-bold text-zinc-300">
									Full-stack Developer
								</h3>
								<span className="text-zinc-400">Rocketseat</span>
							</div>
						</div>
						<div className="rounded-md flex items-center gap-2 text-zinc-400">
							<CalendarDaysIcon className="w-4 h-4 text-zinc-400" />
							<span className="text-sm">2022 - 2023</span>
						</div>
						<span className="text-sm text-zinc-400">
							Formação Full Stack da Rocketseat com foco em JavaScript, Node.js
							e React. Do básico ao avançado em desenvolvimento web.
						</span>
					</div>
				</div>
			</div>
		</motion.section>
	)
}
