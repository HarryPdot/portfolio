import './App.css';
import Home from './Home'
import AboutMe from './AboutMe'
import NavBar from './NavBar'
import BurgerIcon from './BurgerIcon'
import Projects from './Projects'
import Contact from './Contact'
import { useState } from 'react'


function App() {
  const [navToggle, setNavToggle] = useState(false)

  return (
    <div className="App">
      <BurgerIcon className="BurgerIcon-component" navToggle={navToggle} setNavToggle={setNavToggle}/>
      {navToggle && <NavBar className="NavBar-component"/>}
      <Home className="Home-component"/>
      <AboutMe className="AboutMe-component"/>
      <Projects className="Projects"/>
      <Contact className="Contact"/>
    </div>
  );
}

export default App;
