import './Contact.css'

export default function Contact() {
    return (
        <div id='contact' className='contact-container'>
            <div className="contact-container-2">
                <div className='contact-heading'>Contact Me</div>
                <div className='contact-description'>hello yes this is me I am working yes</div>
                <div className='contact-details'>
                   <input className="contact-name" type="text" placeholder='<Name>'/>
                   <input className="contact-email" type="email" placeholder='<Email>' />
                   <textarea className="contact-message" type="text" placeholder='<Message>'></textarea>
                </div>
                <button className='contact-submit'>Submit</button>
            </div>
            <footer>&copy; Developed By Harry </footer>
        </div>
    )
}