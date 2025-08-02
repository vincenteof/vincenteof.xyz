import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className='min-h-screen mx-auto container'>
        <Hero />
        <Experience />
        <TechStack />
        <Projects />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}