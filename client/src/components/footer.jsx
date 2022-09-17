import React from 'react'

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
                        <a href="https://facebook.com/"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" alt="facebook" /></a>
                    </div>
                    <div className="social-item">
                        <a href="https://instagram.com"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt="instagram" /></a>
                    </div>
                    <div className="social-item">
                        <a href="https://linkedin.com.br"><img src="https://img.icons8.com/bubbles/100/000000/linkedin.png" alt="linkedin" /></a>
                    </div>
            </div>
        <a href="https://icons8.com.br/"><h5>Todos os ícones por Icons8</h5></a>
      </div>
    </footer>
  )
}

export default Footer