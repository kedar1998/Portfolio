import Navbar from "./components/Navbar"
import Hero from './components/Hero'      
import Project from "./components/Project"
import About from "./components/About"
import Skills from "./components/Skills"
import Blog from './components/Blog'
import Contact from './components/Contact'


function App() {

  return (
    <div className="bg-bcg text-white">
      <Navbar />
      <Hero />
      <Project />
      <About />
      <Skills />
      <Blog />
      <Contact />

    </div>
  )
}

export default App
