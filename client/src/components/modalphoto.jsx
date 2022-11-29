import React from 'react'
import { useState } from 'react'
import Axios from 'axios'

const ModalPhoto = (item) => {
  const [editValues, setEditValues] = useState({
    id: item.id,
    autor: item.autor,
    titulo: item.titulo,
    local: item.local,
    foto: item.foto,
    portfolio_id: item.portfolio,
  });

  const handleChangeValues = (value) => {
    setEditValues((prevValues)=>({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  }

  const handleEditCard = () => {
    Axios.put('http://localhost:3001/editphoto',{
      id: editValues.id,
      autor: editValues.autor,
      titulo: editValues.titulo,
      local: editValues.local,
      foto: editValues.foto,
      portfolio_id: editValues.portfolio,
    });
    modalClose();
    document.location.reload()  
  }

  const handleDeleteCard = () => {
    Axios.delete(`http://localhost:3001/deletePhoto/${editValues.id}`);
    modalClose()
    document.location.reload()
  }
 
  return (
    <section id="modal2" className='modal-bg2'>
        <div className="modal2">
            <h1>Coloque aqui as informações do cliente</h1>
            <label htmlFor="id">ID:</label>
            <input type="text" name='id' id="id" placeholder="ID do Cliente" onChange={handleChangeValues}/>
            <label htmlFor="Autor">Autor:</label>
            <input type="text" name='name' id="name" placeholder="Nome do Autor" onChange={handleChangeValues}/>
            <label htmlFor="local">Local:</label>
            <input type="text" name='local' id="local" placeholder="Local onde a foto foi tirada" onChange={handleChangeValues}/>
            <label htmlFor="foto">Foto:</label>
            <input type="text" name='foto' id="foto" placeholder="Foto do autor" onChange={handleChangeValues}/>
            <label htmlFor="portfolio" hidden >Portfolio:</label>
            <input type="text" name='portfolio' id="portfolio" placeholder="1 para público, 2 para ocultar foto" onChange={handleChangeValues} hidden value={'1'}/>
            <button onClick={handleEditCard}>Editar</button>
            <button onClick={handleDeleteCard}>Deletar</button>
            <span className="modal-close" onClick={modalClose}>X</span>
        </div>
    </section>
  )
}


function modalClose() {
  let modalBg = document.querySelector('.modal-bg2')
  modalBg.classList.remove('bg-active')
}

export default ModalPhoto