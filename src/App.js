import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div class="wrapper">
      {/* <!-- hero section --> */}
      <Hero />
      {/* <!-- /navbar --> */}

      {/* <!-- skills section --> */}
      <Skills />

      {/* <!-- projects section --> */}
      <Projects />

      {/* <!-- about me section --> */}
      <About />

      {/* <!-- contact me section --> */}
      <Contact />

      {/* <!-- footer section --> */}

      <Footer />
    </div>
  );
}

export default App;
