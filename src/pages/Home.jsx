import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Timeline from '../components/Timeline'
import PortfolioGrid from '../components/PortfolioGrid'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <PortfolioGrid />
      <Footer />
    </>
  )
}
