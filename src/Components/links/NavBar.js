import './NavBar.css'
import {Link} from 'react-scroll'

export default function NavBar({ navToggle }) {
    
    return (
        <div className="navbar-container">
            <div className='navbar-grid'>
                <div><Link activeClass='active' to="home" spy={true} smooth={true} duration={0}>Home</Link></div>
                <div><Link to="about" spy={true} smooth={true} duration={0}>About</Link></div>
                <div><Link to="project" spy={true} smooth={true} duration={0}>Projects</Link></div>
                <div><Link to="contact" spy={true} smooth={true} duration={0}>Contact Me</Link></div>
            </div>
        </div>
    )
}