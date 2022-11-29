import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Projects(props) {
    let link
    // if (props.link)


    return (
        <>
            <div className="listings">

                <div className="listing-card" data-aos="fade-up">
                    {/* <img src="" alt="" /> */}
                    <a href={props.link} target='_blank'><h2>{props.title} {<FontAwesomeIcon icon='fa-arrow-up-right-from-square' />}</h2></a>
                    <h3>{props.subtitle}</h3>
                    <h3>{props.date}</h3>
                    <p>{props.description}</p>
                </div>

            </div>
        </>
    )
}