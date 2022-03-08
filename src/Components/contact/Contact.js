import './Contact.css'
import { useEffect, useState } from 'react'

export default function Contact() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    useEffect(() => {
        setEmail(`mailto:harrypham_2@outlook.com?subject=Portfolio Follow Up - ${name}&body=${message}`)
    }, [ name ])

    useEffect(() => {
        setEmail(`mailto:harrypham_2@outlook.com?subject=Portfolio Follow Up - ${name}&body=${message}`)
    }, [ message ])

    return (
        <div id='contact' className='contact-container'>
            <div className="contact-container-2">
                <div className='contact-heading'>Contact Me</div>
                <div className='contact-description'>hello yes this is me I am working yes</div>
                <div className='contact-details'>
                   <input onChange={handleName} className="contact-name" type="text" placeholder='<Name>'/>
                   <textarea onChange={handleMessage}className="contact-message" type="text" placeholder='<Message>'></textarea>
                </div>
                <div className='contact-submit-grid'>
                    <a href={email} className={name.length && message.length ? `contact-submit` : `contact-submit disabled`}>Submit</a>
                </div>
            </div>

            <footer><a href="https://github.com/HarryPdot/portfolio" target={'_blank'}>Designed and Developed By Harry Pham<br/> Portfolio GitHub</a> 
            </footer>

        </div>
    )
}