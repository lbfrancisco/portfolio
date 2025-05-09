import Link from 'next/link'

export default function LinkButton({ ...props }) {
	return (
		<Link
			href={props.href}
			className="flex items-center justify-center gap-2 text-sm font-bold px-6 py-2 cursor-pointer rounded-full bg-sky-400 border border-sky-300 text-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-sky-400/90"
			{...props}
		>
			{props.children}
		</Link>
	)
}
