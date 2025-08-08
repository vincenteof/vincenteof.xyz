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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8">
          <Hero />
          <Experience />
          <TechStack />
          <Projects />
          <Blogs />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}