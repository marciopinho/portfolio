import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Card(props) {
  const target = props.externalLink ? '_blank' : '';

    return (

        <div className="listing-card" data-aos="fade-up">
          <a href={props.externalLink || props.link}>
            <img src={props.image} />
          </a>
          <a href={props.link || props.externalLink} target={target}><h2>{props.title} {props.externalLink && <FontAwesomeIcon icon='fa-arrow-up-right-from-square' />}</h2></a>
          <h3>{props.subtitle}</h3>
          <h3>{props.date}</h3>
          <p>{props.description}</p>
        </div>
    )
}