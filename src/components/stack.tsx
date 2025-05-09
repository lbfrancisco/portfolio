import { motion } from 'framer-motion'
import {
	SiFastify,
	SiGit,
	SiGithub,
	SiNestjs,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiSqlite,
	SiSwagger,
	SiTailwindcss,
	SiTypescript,
	SiZod,
} from 'react-icons/si'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './ui/tooltip'
import { label } from 'framer-motion/client'

const stackItems = [
	{
		icon: SiTypescript,
		label: 'TypeScript',
		hoverColor: 'group-hover:text-sky-600',
		variant: 'typescript',
	},
	{
		icon: SiNodedotjs,
		label: 'NodeJS',
		hoverColor: 'group-hover:text-green-500',
		variant: 'nodejs',
	},
	{
		icon: SiFastify,
		label: 'Fastify',
		hoverColor: 'group-hover:text-zinc-50',
		variant: 'fastify',
	},
	{
		icon: SiNestjs,
		label: 'NestJS',
		hoverColor: 'group-hover:text-pink-600',
		variant: 'nestjs',
	},
	{
		icon: SiZod,
		label: 'Zod',
		hoverColor: 'group-hover:text-blue-600',
		variant: 'zod',
	},
	{
		icon: SiPostgresql,
		label: 'PostgreSQL',
		hoverColor: 'group-hover:text-cyan-600',
		variant: 'postgresql',
	},
	{
		icon: SiPrisma,
		label: 'Prisma',
		hoverColor: 'group-hover:text-cyan-800',
		variant: 'prisma',
	},
	{
		icon: SiSqlite,
		label: 'SQLite',
		hoverColor: 'group-hover:text-sky-500',
		variant: 'sqlite',
	},
	{
		icon: SiNextdotjs,
		label: 'NextJS',
		hoverColor: 'group-hover:text-zinc-50',
		variant: 'nextjs',
	},
	{
		icon: SiReact,
		label: 'ReactJS',
		hoverColor: 'group-hover:text-sky-300',
		variant: 'reactjs',
	},
	{
		icon: SiTailwindcss,
		label: 'TailwindCSS',
		hoverColor: 'group-hover:text-sky-300',
		variant: 'tailwindcss',
	},
	{
		icon: SiGit,
		label: 'Git',
		hoverColor: 'group-hover:text-orange-600',
		variant: 'git',
	},
	{
		icon: SiGithub,
		label: 'GitHub',
		hoverColor: 'group-hover:text-purple-500',
		variant: 'github',
	},
	{
		icon: SiSwagger,
		label: 'Swagger',
		hoverColor: 'group-hover:text-green-300',
		variant: 'swagger',
	},
] as const

export type StackVariant = (typeof stackItems)[number]['variant']

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

type StackProps = {
	variant: string
}

export default function Stack({ variant }: StackProps) {
	const stack = stackItems.find((item) => item.variant === variant)

	if (!stack) {
		return null
	}

	const Icon = stack.icon

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={itemVariants}
			className="inline-flex"
		>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<div className="p-4 border rounded-full group">
							<Icon
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
}
