import { Link } from 'react-router-dom'
import Logo from '../assets/logo.jpg'
function NavbarAdmin() {


    const hamburguer = document.querySelector(".hamburguer");
    const navbaritens = document.querySelector(".navbaritens");

    document.querySelectorAll("navbaritens").forEach(n => n.addEventListener("click", () => {
        hamburguer.classList.remove("active");
        navbaritens.classList.remove("active");

    }
    ))
    return (
        <nav id="navbar">
            <div className="navbar">
                <div className="navbarlogo">
                    <img src={Logo} alt="Logo"></img>
                </div>
                <div className="navbaritens">
                        <Link to="/">Home</Link>
                        <Link to="/portfolio">Portfolio</Link>
                </div>
                <div className="hamburguer" onClick={hamburguerClick}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                </div>
            </div>
        </nav>
    )
}


function hamburguerClick() {

    const hamburguer = document.querySelector(".hamburguer");
    const navbaritens = document.querySelector(".navbaritens");

    hamburguer.addEventListener("click", () => {
        hamburguer.classList.toggle("active");
        navbaritens.classList.toggle("active");

    })

}


export default NavbarAdmin