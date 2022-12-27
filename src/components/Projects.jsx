import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Projects(props) {


    return (
        <div className="listing-card" data-aos="fade-up">
            {/* <img src="" alt="" /> */}
            <a href={props.link} target='_blank'><h2>{props.title} {props.link && <FontAwesomeIcon icon='fa-arrow-up-right-from-square' />}</h2></a>
            <h3>{props.subtitle}</h3>
            <h3>{props.date}</h3>
            <p>{props.description}</p>
        </div>
    )
}