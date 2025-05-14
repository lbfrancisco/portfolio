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
			className="w-full flex flex-row flex-wrap gap-4 md:flex-nowrap md:items-center md:justify-center"
		>
			{technologies.map((stack, index) => (
				<motion.div
					key={stack}
					variants={itemVariants}
					custom={index}
					className="flex-shrink-0" /* garante que cada item não encolha demais */
				>
					<Stack variant={stack} />
				</motion.div>
			))}
		</motion.div>
	)
}
