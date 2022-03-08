import "./App.css";
import Home from "./Components/home/Home";
import AboutMe from "./Components/about/AboutMe";
import NavBar from "./Components/links/NavBar";
import Projects from "./Components/projects/Projects";
import Contact from "./Components/contact/Contact";
import Links from "./Components/links/Links";
import { useState, useRef, useEffect } from "react";

function App() {
  function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar className="NavBar-component" />
      <div className="App">
        <FadeInSection>
          <Home className="Home-component" />
        </FadeInSection>
        <FadeInSection>
          <AboutMe className="AboutMe-component" />
        </FadeInSection>
        <FadeInSection>
          <Projects className="Projects" />
        </FadeInSection>
        <FadeInSection>
          <Contact className="Contact" />
        </FadeInSection>
      </div>
    </>
  );
}

export default App;
