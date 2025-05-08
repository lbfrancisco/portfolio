'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function CycleText() {
	const words = [
		'soluções rápidas',
		'código limpo',
		'interfaces fluidas',
		'projetos únicos',
	]
	const [index, setIndex] = useState(0)

	const total = words.length
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((current) => (current + 1) % total)
		}, 1500)
		return () => clearInterval(interval)
	}, [total])

	return (
		<div>
			<AnimatePresence mode="wait">
				<motion.span
					key={`words_${index}`}
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -30 }}
					transition={{ duration: 0.1 }}
					className="font-inter text-5xl bg-gradient-to-b from-sky-400 to-emerald-400 bg-clip-text text-transparent font-bold"
				>
					{words[index]}
				</motion.span>
			</AnimatePresence>
		</div>
	)
}
