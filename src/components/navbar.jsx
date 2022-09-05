import image from '../assets/logo.jpg'

function Navbar() {
    return (
        <nav id="navbar">
            <div className="navbar">
                <div className="navbar-logo">
                    <a href="hero">BRM Consultoria</a>
                </div>
                <div className="navbar-itens">
                <ul>
                    <li><a href="#">Clientes</a></li>
                    <li><a href="#">Contatos</a></li>
                    <li><a href="#">Portfolio</a></li>
                </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar 