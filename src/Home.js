import './Home.css'
import { Link } from 'react-scroll'

export default function Home() {


    return (
        <div id='home' className='home-container'>
            <div className='home-box'>
                <header className='home-header'>
                    <div className='home-name'>Harry Pham,</div>
                    <div className='home-prof'>Full stack</div>
                    <div className='home-prof-2'> developer</div>
                </header>
                <div className='home-description'>
                    My best days are when I am working with a computer in front of me.
                </div>
                <div className='buttons'>
                    <button className='home-contact'>
                        <Link to="contact" spy={true} smooth={true} duration={0}>Contact Me</Link>
                    </button>
                </div>

            </div>
        </div>
    )
}