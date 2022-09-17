import React from 'react'

import Image1 from '../assets/bg-cursedcar-1.jpg'


const Clientes = () => {


  return (
    <section id="clientes">
      <div className="clientes container">
        <h2>Clientes</h2>
        <p>Aqui estão alguns de nossos clientes.</p>
      </div>
      <div className="cliente-bottom">
        <Clientesitem />
        <Clientesitem />
        <Clientesitem />
        <Clientesitem />
      </div>
    </section>
  )
}


const Clientesitem = () => {
  return (
    <div className="clientesItem">
      <h3>Título</h3>
      <div className="clienteBarra"></div>
      <div className="clienteLogo">
        <img src={Image1} alt="Logo Cliente"></img>
      </div>
    </div>
  )
}




export default Clientes