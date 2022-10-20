import React from 'react'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook-logo.png'
import instagram from '../assets/instagram-logo.png'


const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer">
        <h1>BRM Consultoria</h1>
        <div className="footerItens">
          <a href="http://google.com">Whatsapp:11 xxxxx-xxxx</a>
          <p>Redes Sociais:</p>
        </div>
        <div className="redesocial">
            <div className="social-item">
                        <a href="https://facebook.com/"><img src={facebook} alt="facebook" /></a>
                    </div>
                    <div className="social-item">
                        <a href="https://instagram.com"><img src={instagram} alt="instagram" /></a>
                    </div>
                    <div className="social-item">
                        <a href="https://linkedin.com.br"><img src={linkedin} alt="linkedin"/></a>
                    </div>
            </div>
      </div>
    </footer>
  )
}

export default Footer