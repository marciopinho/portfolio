import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Contact() {
    return(
        <div className="contact">
            <h2>get in touch.</h2>
            <div className="contact--logos">
            
                <a className="icon" href="https://www.instagram.com/marciopinho/">
                    <FontAwesomeIcon icon={['fab', 'instagram-square']} />
                </a>

                <a className="icon"  href="https://www.linkedin.com/in/marciopinho42/">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>

                <a className="icon"  href="https://github.com/marciopinho">
                    <FontAwesomeIcon icon={['fab', 'github-square']} />
                </a>

                <a className="icon"  href="https://api.whatsapp.com/send/?phone=5531988318145">
                    <FontAwesomeIcon icon={['fab', 'whatsapp-square']} />
                </a>
            </div>
        </div>
    )
}