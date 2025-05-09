'use client'

import { motion } from 'framer-motion'

import { projects } from '../data/projects.json'
import ProjectCard from './project-card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel'

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
					{projects.length === 0 && (
						<span className="text-zinc-400">
							Não há nenhum projeto para ser exibido.
						</span>
					)}
					<Carousel
						opts={{
							align: 'start',
						}}
						className="w-full"
					>
						<CarouselContent>
							{projects.length > 0 &&
								projects.map((project) => {
									return (
										<CarouselItem
											key={project.id}
											className="md:basis-1/1 lg:basis-1/2"
										>
											<ProjectCard
												title={project.title}
												description={project.description}
												technologies={project.technologies}
												image={project.image}
												github={project.github}
											/>
										</CarouselItem>
									)
								})}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		</motion.section>
	)
}
