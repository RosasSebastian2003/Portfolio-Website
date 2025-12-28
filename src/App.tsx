import About from './sections/About'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import Experience from './sections/Experience'

const App = () => {
  return (
    <main>
      <div className='max-w-7xl mx-auto'>
        <NavBar />
      </div>
      <Hero />
      <div className='max-w-7xl mx-auto'>
        <About />
        <Projects />
        <Clients />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App