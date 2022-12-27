import profileImg from '../assets/pixelated-avatar-medium.jpg'

export default function About() {
    return (
        <div className="about">
            <img src={profileImg} alt="profile picture" id="about--profile-picture" data-aos="fade-up"/>
            <div className="about--text">
                <h1 className="about--title" data-aos="fade-up">.about</h1>
                <p className="about--content" data-aos="fade-up">I'm a full-stack web developer having mostly worked with Ruby on Rails, JavaScript, CSS, HTML, and PostgreSQL. Curently I'm using React and getting myself familiar with Next.js. I'm in a permanent state of learning new tools and delving deeper into the ones I'm comfortable with.</p>
            </div>
        </div>
    )
}