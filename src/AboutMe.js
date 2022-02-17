import './AboutMe.css'
import portraitImage from './images/600x600.jpg'

export default function AboutMe() {

    return (
        <div className='aboutme-container'>
            <div className="aboutme-container-2">
                <div className='aboutme-grid'>
                    <div className='aboutme-title'>About Me</div>
                    <div className='aboutme-description'> My best days are when I am working with a computer in front of me. I have a love of learning and learn new programs very quickly. Looking at my career trajectory I decided to make a change and study Software Engineering. I am enjoying front-end developing and looking forward to creating new applications that I am interested in. </div>
                    <div className='aboutme-description'> My best days are when I am working with a computer in front of me. </div>
                    <button className='resume-button'>View my resume</button>
                </div>
                <div className='aboutme-image'>
                <img src={portraitImage} alt="" />
                </div>
            </div>
        </div>
    )
}