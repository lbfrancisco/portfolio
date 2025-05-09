import { motion } from 'framer-motion'

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './ui/tooltip'

import { technologies } from '../data/technologies.json'
import Stack from './stack'

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
}

export default function Stacks() {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className="flex items-center justify-center gap-6 mt-8"
		>
			{technologies.length > 0 &&
				technologies.map((stack, index) => {
					return (
						<motion.div key={stack} variants={itemVariants} custom={index}>
							<Stack variant={stack} />
						</motion.div>
					)
				})}
		</motion.div>
	)
}
