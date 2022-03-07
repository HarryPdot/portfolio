import './App.css';
import Home from './Home'
import AboutMe from './AboutMe'
import NavBar from './NavBar'
import BurgerIcon from './BurgerIcon'
import Projects from './Projects'
import Contact from './Contact'
import Links from './Links'
import { useState, useRef, useEffect } from 'react'

function App() {  
  const [navToggle, setNavToggle] = useState(false)

  function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <BurgerIcon className="BurgerIcon-component" navToggle={navToggle} setNavToggle={setNavToggle}/>
      <Links className="GitHub Component"></Links>
      {navToggle && <NavBar className="NavBar-component"/>}
      <FadeInSection>
        <Home className="Home-component"/>
      </FadeInSection>
      <FadeInSection>
        <AboutMe className="AboutMe-component"/>
      </FadeInSection>
      <FadeInSection>
        <Projects className="Projects"/>
      </FadeInSection>
      <FadeInSection>
        <Contact className="Contact"/>
      </FadeInSection>
    </div>
  );
}

export default App;
