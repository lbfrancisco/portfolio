import AboutMe from '@/components/about-me'
import Academy from '@/components/academy'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Projects from '@/components/projects'

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<AboutMe />
			<Academy />
			<Projects />
			<Contact />
			<Footer />
		</main>
	)
}
