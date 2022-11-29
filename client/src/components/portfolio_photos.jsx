import React from 'react'


const PortfolioP = ({titulo, descricao, autor, local, foto}) => {


  return (
    <section id="photos">
        <div className="photo"
        style={{
          backgroundImage: `url(${foto})`
        }}>
            <div className="phototitle">
            <h3>{titulo}</h3>
            <h3>{autor}</h3>
            <h3>{local}</h3>
            </div>
        </div>
    </section>
  )
}

export default PortfolioP