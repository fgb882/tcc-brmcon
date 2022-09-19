import { Link } from 'react-router-dom'
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
                    <Link to="/">BRM Consultoria</Link>
                </div>
                <div className="navbaritens">
                        <a href="#clientpanel">Clientes</a>
                        <a href="#Photopanel">Fotos</a>
                        <a href="#Userpanel">Usuários</a>
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