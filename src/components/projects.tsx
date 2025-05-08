'use client'

import { motion } from 'framer-motion'
import { CalendarDaysIcon, GraduationCapIcon } from 'lucide-react'

export default function Projects() {
	return (
		<motion.section
			id="projects"
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
			<div className="max-w-[1280px] mx-auto space-y-6">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="text-4xl font-bold text-zinc-100 leading-tight text-center"
				>
					Projetos
				</motion.h2>
				<div className="flex justify-center items-stretch gap-6">
					<span className="text-zinc-400">Em desenvolvimento...</span>
				</div>
			</div>
		</motion.section>
	)
}
