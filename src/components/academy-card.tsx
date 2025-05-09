import { CalendarDaysIcon, GraduationCapIcon } from 'lucide-react'

interface AcademyCardProps {
	title: string
	institution: string
	period: string
	description: string
}

export default function AcademyCard({
	title,
	institution,
	period,
	description,
}: AcademyCardProps) {
	return (
		<div className="flex-1 border rounded-md p-4 bg-zinc-900/30 space-y-4 min-h-[250px] max-w-[450px] hover:border-zinc-100 transition-colors duration-700 ease-in-out">
			<div className="flex items-center gap-2">
				<div className="bg-zinc-800 p-2 rounded-md self-start">
					<GraduationCapIcon className="w-6 h-6 text-zinc-100" />
				</div>
				<div>
					<h3 className="text-lg font-bold text-zinc-300">{title}</h3>
					<span className="text-zinc-400">{institution}</span>
				</div>
			</div>
			<div className="rounded-md flex items-center gap-2 text-zinc-400">
				<CalendarDaysIcon className="w-4 h-4 text-zinc-400" />
				<span className="text-sm">{period}</span>
			</div>
			<span className="text-sm text-zinc-400">{description}</span>
		</div>
	)
}
