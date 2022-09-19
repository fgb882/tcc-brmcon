import Axios from 'axios'
import React, { useEffect, useState } from 'react'

const Clientes = () => {

  const [clients, setClient] = useState()

  
  useEffect(() =>{
    Axios.get("http://localhost:3001/getclient").then((response) =>
    {
      setClient(response.data);
    });
  });

  return (
    <section id="clientes">
      <div className="clientes container">
        <h2>Clientes</h2>
        <p>Aqui estão alguns de nossos clientes.</p>

        
      </div>
      <div className="cliente-bottom">
      {typeof clients !== "undefined" &&
         clients.map((value) => {
          return(
          <Clientesitem key={value.id} name={value.nome} logo={value.logo} />
          )
        })}
      </div>
    </section>
  )
}


const Clientesitem = ({name, logo}) => {
  return (
    <div className="clientesItem">
      <h3>{name}</h3>
      <div className="clienteBarra"></div>
      <div className="clienteLogo">
        <img src={logo} alt="Logo Cliente"></img>
      </div>
    </div>
  )
}




export default Clientes