import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import './styles/main.css';


function App() {
  return (
    <div className="w-full h-screen">
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default App
