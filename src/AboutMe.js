import './AboutMe.css'
import portraitImage from './images/aboutme.jpg'
import resume from './file/resume.pdf'

export default function AboutMe() {

    return (
        <div id='about' className='aboutme-container'>
            <div className="aboutme-container-2">

                <div className="aboutme-container-3">
                    <div className='aboutme-image'>
                        <img src={portraitImage} alt="" />
                    </div>
                    <div className='aboutme-grid'>
                        <div className='aboutme-title'>About Me</div>
                        <div className='aboutme-description'> My best days are when I am working with a computer in front of me. I have a love of learning and learn new programs very quickly. Looking at my career trajectory I decided to make a change and study Software Engineering.  </div>
                        <p className="aboutme-description"> I am enjoying front-end developing and looking forward to creating new applications that I am interested in. My best days are when I am working with a computer in front of me. I have a love of learning and learn new programs very quickly. Looking at my career trajectory I decided to make a change and study Software Engineering. My best days are when I am working with a computer in front of me. I have a love of learning and learn new programs very quickly. Looking at my career trajectory I decided to make a change and study Software Engineering.My best days are when I am working with a computer in front of me. I have a love of learning and learn new programs very quickly. Looking at my career trajectory I decided to make a change and study Software Engineering.</p>
                        <a href={resume} target="_blank" className='resume-button' >View my resume</a>
                    </div>
                </div>

            </div>
        </div>
    )
}