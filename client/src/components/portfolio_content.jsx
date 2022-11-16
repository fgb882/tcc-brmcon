import React from 'react'
import { Link } from 'react-router-dom'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook-logo.png'
import instagram from '../assets/instagram-logo.png'

const PortfolioC = () => {
  return (
    <section id="portfolio">
        <div className="portfoliomain">
            <div className="portfolioinfo">
            <Link to="/" style={
                {color: '#fff'}
                }>BRM Consultoria</Link>
            </div>
            <div className="redesocial">
            <h4>Redes Sociais</h4>
            <div className="column">
            <div className="social-item">
                        <a href="https://wa.me/"><img src={facebook} alt="facebook" /></a>
                    </div>
                    <div className="social-item">
                        <a href="https://instagram.com"><img src={instagram} alt="instagram" /></a>
                    </div>
                    <div className="social-item">
                        <a href="https://linkedin.com.br"><img src={linkedin} alt="linkedin" /></a>
                    </div>
                    </div>
            </div>
            <p>Obrigado por visitar o BRM Consultoria</p>

        </div>
    </section>
  )
}

export default PortfolioC