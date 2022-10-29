import Uemg from '../assets/uemg.png'
import Polito from '../assets/polito.png'
import Ufmg from '../assets/logo_ufmg_m_only.png'
// import Lewagon from '../assets/lewagon.png'

export default function Education() {
    return (
        <div className="education">
            <div className="education--instance">
                <div>
                    <h2>Le Wagon</h2>
                    <h3>Full-stack Web Development</h3>
                </div>
            </div>

            <div>

            </div>

            <div className="education--instance">
            <img src={Polito} alt="" />
                <h2>Politecnico di Torino</h2>
                <h3>MSc in Systemic Design</h3>
            </div>

            <div className="education--instance">
                <img src={Uemg} alt="" />
                <h2>Universidade do Estado de Minas Gerais</h2>
                <h3>BSc in Graphic Design</h3>
            </div>

            <div className="education--instance">
            <img src={Ufmg} alt="" />
                <h2>Universidade Federal de Minas Gerais</h2>
                <h3>BSc in Business Management</h3>
            </div>

        </div>
    )
}