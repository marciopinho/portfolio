import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Projects() {
    return (
        <>
            <h1 className="section-header" data-aos="fade-up">.projects</h1>

            <div className="listings">

                <div className="listing-card" data-aos="fade-up">
                    {/* <img src="" alt="" /> */}
                    <a href="https://marciopinho.medium.com/partify-streamlining-nightlife-recommendations-aeb019ca273a" target='_blank'><h2>Partify</h2></a>
                    <h3></h3>
                    <h3>2022</h3>
                    <p></div>

                <div className="listing-card" data-aos="fade-up">
                    {/* <img src="" alt="" /> */}
                    <h2><a href= target='_blank'>ZapGo <FontAwesomeIcon icon='fa-arrow-up-right-from-square' /></a></h2>
                    <h3></h3>
                    <h3>2022</h3>
                    <p></p>
                </div>

                <div className="listing-card" data-aos="fade-up">
                    {/* <img src="" alt="" /> */}
                    <h2>WorkSpace</h2>
                    <h3></h3>
                    <h3>2022</h3>
                    <p></div>

                <div className="listing-card" data-aos="fade-up">
                    {/* <img src="" alt="" /> */}
                    <h2>Portfolio</h2>
                    <h3>My website.</h3>
                    <h3>2022</h3>
                    <p>The page you're in is my first ReactJS project. It was created with Vite, and the code is available on <a href= target='_blank'><strong>my GitHub</strong></a>.</p>
                </div>

            </div>
        </>
    )
}