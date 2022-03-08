import './Links.css'
import { GoMarkGithub } from "react-icons/go"
import { SiLinkedin } from "react-icons/si"

export default function Links() {


    return (
        <div className='github-container'>
            <a href="https://linkedin.com/in/harry-pham-developer" target={'_blank'}><SiLinkedin className='link'></SiLinkedin></a>
            <a href="https://github.com/HarryPdot" target={'_blank'}><GoMarkGithub className='link'></GoMarkGithub></a>
        </div>
    )
}