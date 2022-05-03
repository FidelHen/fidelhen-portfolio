import Navigation from '@/components/navigation'
import Companies from '@/layouts/companies'
import Contact from '@/layouts/contact'
import Experiences from '@/layouts/experiences'
import Hero from '@/layouts/hero'
import Projects from '@/layouts/projects'
import Footer from '@/components/footer'
import Metatags from '@/components/meta'
export default function Home() {
  return (
    <div className='grid gap-4'>
      <Metatags />
      <Navigation />
      <Hero />
      <Companies />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  )
}
