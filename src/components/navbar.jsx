import { Link } from 'react-router-dom'
function Navbar() {


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
                    <a href="#hero">BRM Consultoria</a>
                </div>
                <div className="navbaritens">
                        <a href="#">Clientes</a>
                        <a href="#">Contatos</a>
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


export default Navbar 