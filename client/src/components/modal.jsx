import React from 'react'

const Modal = () => {

  return (
    <section id="modal" className='modal-bg'>
        <div className="modal">
            <h1>Edite aqui</h1>
            <label htmlFor="Nome">Nome:</label>
            <input type="text" name='name' />
            <label htmlFor="logo">Logo:</label>
            <input type="text" name='logo' />
            <button>Editar</button>
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