// @Scripts
import Hero from '@/components/Molecules/Hero'
import About from '@/components/Molecules/About'
import Skills from '@/components/Molecules/Skills'
import Projects from '@/components/Molecules/Projects'
import Blogs from '@/components/Molecules/Blogs'
import Contact from '@/components/Molecules/Contact'
import Footer from '@/components/Molecules/Footer'
import Navbar from '@/components/Molecules/Navbar'


export default function Home() {
  const scrollToSection = () => {
    const targetSection = document.getElementById('contact');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Navbar id="home"/>
      <Hero id="home" scrollToSection={scrollToSection}/>
      <About id="about"/>
      <Skills id="skills"/>
      <Projects id="projects"/> 
      <Blogs id="blogs"/> 
      <Contact id="contact"/> 
      <Footer id="footer"/>
    </>
  )
}
