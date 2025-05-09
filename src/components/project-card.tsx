import Link from 'next/link'
import Stack from './stack'

interface ProjectCardProps {
	title: string
	description: string
	technologies: string[]
	image: string
	github: string
}

export default function ProjectCard({
	title,
	description,
	technologies,
	image,
	github,
}: ProjectCardProps) {
	return (
		<div className="bg-zinc-900/30 rounded-md border overflow-hidden h-full">
			<div className="w-full">
				<img
					src={image}
					alt={title}
					className="w-full h-48 object-cover object-top"
				/>
			</div>
			<div className="p-4 space-y-6">
				<div className="flex items-center justify-between gap-4">
					<div className="space-y-2">
						<h3 className="font-medium text-xl">{title}</h3>
						<Link
							href={github}
							className="text-sm text-sky-400 border-b border-transparent hover:border-b hover:border-sky-400 transition-all"
						>
							Ver repositório
						</Link>
					</div>

					{Array.isArray(technologies) && technologies.length > 0 && (
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-2">
								{technologies.map((tech) => (
									<Stack key={tech} variant={tech} />
								))}
							</div>
						</div>
					)}
				</div>
				<p className="text-sm text-zinc-400">{description}</p>
			</div>
		</div>
	)
}
