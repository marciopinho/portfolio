import profileImg from '../assets/pixelated-avatar-medium.jpg'

export default function About({aboutData}) {
    return (
        <div className="about">
            <img src={profileImg} alt="profile picture" id="about--profile-picture" data-aos="fade-up"/>
            <div className="about--text">
                <h1 className="about--title" data-aos="fade-up">.about</h1>
                <p className="about--content" data-aos="fade-up">{aboutData}</p>
            </div>
        </div>
    )
}