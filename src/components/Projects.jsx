export default function Projects() {
    return (
        <div className="listings">
            <h1 data-aos="fade-up">projects.</h1>

            <div>
                <div className="listing-card" data-aos="fade-up">
                    <img src="" alt="" />
                    <a href="https://marciopinho.medium.com/partify-streamlining-nightlife-recommendations-aeb019ca273a" target='_blank'><h2>Partify</h2></a>
                    <h3>Streamlining nightlife recommendations.</h3>
                    <h3>2022</h3>
                    <p className="projects--p">Partify is a web app that models a user's music taste from data fetched via Spotify's API and recommends matching events and venues. Partify is not online as of this writing, but you can read about it <a href="https://marciopinho.medium.com/partify-streamlining-nightlife-recommendations-aeb019ca273a" target='_blank'>here</a>.</p>
                </div>

                <div className="listing-card" data-aos="fade-up">
                    <img src="" alt="" />
                    <h2><a href="https://zapgo.online" target='_blank'>ZapGo</a></h2>
                    <h3>Send WhatsApp messages to unsaved contacts.</h3>
                    <h3>2022</h3>
                    <p className="projects--p">ZapGo is a simple and useful application which allows WhatsApp messages to be sent to recipients who are not on the sender's contact list.</p>
                </div>

                <div className="listing-card" data-aos="fade-up">
                    <img src="" alt="" />
                    <h2>WorkSpace</h2>
                    <h3>B2P and P2P coworking spaces.</h3>
                    <h3>2022</h3>
                    <p className="projects--p">A Ruby on Rails platform to connect businesses or individuals who have available coworking spaces and potential customers. The application was developed as a project for Le Wagon's web development bootcamp.</p>
                </div>

                <div className="listing-card" data-aos="fade-up">
                    <img src="" alt="" />
                    <h2>Portfolio</h2>
                    <h3>My website.</h3>
                    <h3>2022</h3>
                    <p className="projects--p">The page you're in is my first ReactJS project. It was created with Vite, and the code is available on <a href="https://github.com/marciopinho/portfolio" target='_blank'>my GitHub</a>.</p>
                </div>

            </div>
        </div>
    )
}