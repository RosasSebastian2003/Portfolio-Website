import About from './sections/About'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import Projects from './sections/Projects'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
    </main>
  )
}

export default App