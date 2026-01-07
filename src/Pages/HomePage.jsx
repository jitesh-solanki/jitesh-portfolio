import Home from "../Components/Home";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Gallery from "../Components/Gallery";
import Skills from "../Components/Skills";
import Resume from "../Components/Resume";
import Blog from "../Components/Blog";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default HomePage;
