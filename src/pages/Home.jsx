import Background from "../components/Background";
import Hero from "../components/Hero";
import About from "../components/About";
import Internship from "../components/Internship";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="relative z-10 overflow-x-hidden">
      <Background />
      <Hero />
      <About />
      <Internship />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
