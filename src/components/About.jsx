import profileImg from '../assets/pixelated-avatar-medium-yellow.jpg'

export default function About() {
    return (
        <div className="about">
            <img src={profileImg} alt="profile picture" id="about--profile-picture" data-aos="fade-up"/>
            <div className="about--text">
                <h1 className="about--title" data-aos="fade-up">.about</h1>
                <p className="about--content" data-aos="fade-up">I'm a full-stack web developer based in Brazil. I've worked mostly with Ruby on Rails, JavaScript, CSS, HTML and PostgreSQL, but I’m in a permanent state of learning new tools and delving deeper into the ones I'm comfortable with.</p>
            </div>
        </div>
    )
}