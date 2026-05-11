import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import CV from './components/CV'
import Project from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <CV />
      <Project />
      <Contact />
      <Footer />
    </main>
  )
}