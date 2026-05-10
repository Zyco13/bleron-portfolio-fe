import Hero from './components/Hero'
import Story from './components/Story'
import Skills from './components/Skills'
import CV from './components/CV'
import Project from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Skills />
      <CV />
      <Project />
      <Contact />
      <Footer />
    </main>
  )
}