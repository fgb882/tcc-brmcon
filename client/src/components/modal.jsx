import React from 'react'
import { useState } from 'react'
import Axios from 'axios'

const Modal = (item) => {
  const [editValues, setEditValues] = useState({
    id: item.id,
    name: item.name,
    logo: item.logo,
  });

  const handleChangeValues = (value) => {
    setEditValues((prevValues)=>({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  }

  const handleEditCard = () => {
    Axios.put('http://localhost:3001/editclient',{
      id: editValues.id,
      name: editValues.name,
      logo: editValues.logo,
    });
    modalClose();
    document.location.reload();
  }

  const handleDeleteCard = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`);
    modalClose()
    document.location.reload()
  }
  
  
  return (
    <section id="modal" className='modal-bg'>
        <div className="modal">
            <h1>Coloque aqui as informações do cliente</h1>
            <label htmlFor="id">ID:</label>
            <input type="text" name='id' id="id" placeholder="ID do Cliente" onChange={handleChangeValues}/>
            <label htmlFor="Nome">Nome:</label>
            <input type="text" name='name' id="name" placeholder="Nome Desejado" onChange={handleChangeValues}/>
            <label htmlFor="logo">URL da Logo:</label>
            <input type="text" name='logo' id="logo" placeholder="URL da Logo Desejada"  onChange={handleChangeValues}/>
            <button onClick={handleEditCard}>Editar</button>
            <button className='delete' onClick={handleDeleteCard}>Deletar</button>
            <span className="modal-close" onClick={modalClose}>X</span>
        </div>
    </section>
  )
}


function modalClose() {
  let modalBg = document.querySelector('.modal-bg')
  modalBg.classList.remove('bg-active')
}

export default Modal