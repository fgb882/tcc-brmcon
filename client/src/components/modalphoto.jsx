import React from 'react'

const ModalPhoto = () => {

  return (
    <section id="modal2" className='modal-bg2'>
        <div className="modal2">
            <h1>Edite aqui</h1>
            <label htmlFor="Nome">Nome:</label>
            <input type="text" name='name' />
            <label htmlFor="Titulo">Título:</label>
            <input type="text" name='Titulo' />
            <label htmlFor="Local">Local:</label>
            <input type="text" name='Local' />
            <label htmlFor="Portfolio">ID do Portfolio:</label>
            <input type="text" name='Portfolio' />
          
            <label htmlFor="logo">URL da Foto:</label>
            <input type="text" name='logo' />
            <button>Editar</button>
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