import React from 'react'
import { Link } from 'react-router-dom'

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
                        <a href="https://wa.me/"><img src="https://img.icons8.com/bubbles/100/000000/whatsapp.png" alt="whatsapp" /></a>
                    </div>
                    <div className="social-item">
                        <a href="https://instagram.com"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt="instagram" /></a>
                    </div>
                    <div className="social-item">
                        <a href="https://linkedin.com.br"><img src="https://img.icons8.com/bubbles/100/000000/linkedin.png" alt="linkedin" /></a>
                    </div>
                    </div>
            </div>
            <p>Obrigado por visitar o BRM Consultoria</p>

        </div>
    </section>
  )
}

export default PortfolioC