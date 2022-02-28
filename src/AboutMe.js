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
                        <div className='aboutme-description'> I am a software developer, and I previously studied business. I have a passion for learning, and with how broad program languages are, I find it very interesting how everything I learnt can connect with one another. I am open for opportunities that will expand my knowledge, and would love to work with a team with similar mindsets.  </div>
                        <p className="aboutme-description"> My hobbies are playing strategic games and spending time with my dogs. I try to stay proactive with a healthy lifestyle going to the gym, and trying to eat healthy.</p>
                        <a href={resume} target="_blank" className='resume-button' >View my resume</a>
                    </div>
                </div>

            </div>
        </div>
    )
}