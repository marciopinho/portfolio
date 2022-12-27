import Uemg from '.src/assets/uemg.png'
import Polito from '.src/assets/polito.png'
import Ufmg from '.src/assets/logo_ufmg_m_only.png'
import Wagon from '.src/assets/wagon_black.png'

export default function Education() {
    return (
        <>
            <h1 className="section-header" data-aos="fade-up">.education</h1>
            
            <div className="listings">

                    <div className="listing-card" data-aos="fade-up">
                        <a href="https://www.lewagon.com/about-us" target="_blank"><img src={Wagon} alt="Le Wagon logo" /></a>
                        <h2></h2>
                        <h3></h3>
                        <h3></h3>
                    </div>

                    <div className="listing-card" data-aos='fade-up'>
                        <a href="https://www.polito.it/index.php?lang=en" target="_blank"><img src={Polito} alt="" /></a>


                    <div className="listing-card" data-aos='fade-up'>
                        <a href="https://uemg.br/internacional" target="_blank"><img src={Uemg} alt="" /></a>
                        <h2>UEMG</h2>
                        <h3></h3>
                        <h3></h3>
                    </div>

                    <div className="listing-card" data-aos='fade-up'>
                        <a href="https://ufmg.br/international-visitors" target="_blank"><img src={Ufmg} alt="" /></a>
                        <h2></h2>
                        <h3></h3>
                        <h3></h3>
                    </div>

            </div>
        </>
    )
}