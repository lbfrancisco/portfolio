import { motion } from 'framer-motion'
import {
	SiTypescript,
	SiNodedotjs,
	SiFastify,
	SiNestjs,
	SiZod,
	SiPostgresql,
	SiPrisma,
	SiSqlite,
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiGit,
	SiGithub,
} from 'react-icons/si'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './ui/tooltip'

const stackItems = [
	{
		icon: SiTypescript,
		label: 'TypeScript',
		hoverColor: 'group-hover:text-sky-600',
	},
	{
		icon: SiNodedotjs,
		label: 'NodeJS',
		hoverColor: 'group-hover:text-green-500',
	},
	{ icon: SiFastify, label: 'Fastify', hoverColor: 'group-hover:text-zinc-50' },
	{ icon: SiNestjs, label: 'NestJS', hoverColor: 'group-hover:text-pink-600' },
	{ icon: SiZod, label: 'Zod', hoverColor: 'group-hover:text-blue-600' },
	{
		icon: SiPostgresql,
		label: 'PostgreSQL',
		hoverColor: 'group-hover:text-cyan-600',
	},
	{ icon: SiPrisma, label: 'Prisma', hoverColor: 'group-hover:text-cyan-800' },
	{ icon: SiSqlite, label: 'SQLite', hoverColor: 'group-hover:text-sky-500' },
	{
		icon: SiNextdotjs,
		label: 'NextJS',
		hoverColor: 'group-hover:text-zinc-50',
	},
	{ icon: SiReact, label: 'ReactJS', hoverColor: 'group-hover:text-sky-300' },
	{
		icon: SiTailwindcss,
		label: 'TailwindCSS',
		hoverColor: 'group-hover:text-sky-300',
	},
	{ icon: SiGit, label: 'Git', hoverColor: 'group-hover:text-orange-600' },
	{
		icon: SiGithub,
		label: 'GitHub',
		hoverColor: 'group-hover:text-purple-500',
	},
]

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1, // Atraso baseado no índice
			duration: 0.5,
		},
	}),
}

export default function Stacks() {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className="flex items-center justify-center gap-6 mt-8"
		>
			{stackItems.map((stack, index) => {
				const Icon = stack.icon
				return (
					<motion.div
						key={stack.label}
						variants={itemVariants}
						custom={index} // Passa o índice para o variant
						// className="p-4 border rounded-full group"
					>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<div className="p-4 border rounded-full group">
										<Icon
											size={32} // Define o tamanho diretamente no componente do ícone
											className={`text-zinc-100 size-4 ${stack.hoverColor} transition-colors`}
										/>
									</div>
								</TooltipTrigger>
								<TooltipContent>
									<span>{stack.label}</span>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</motion.div>
				)
			})}
		</motion.div>
	)
}
