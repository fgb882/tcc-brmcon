import React from 'react'

const ModalPhoto = (item) => {
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
    Axios.put('http://localhost:3001/editphoto',{
      id: editValues.id,
      name: editValues.name,
      logo: editValues.logo,
    });
    modalClose();
    document.location.reload()  
  }

 
  return (
    <section id="modal" className='modal-bg'>
        <div className="modal">
            <h1>Coloque aqui as informações do cliente</h1>
            <label htmlFor="id">ID:</label>
            <input type="text" name='id' id="id" placeholder="ID do Cliente" onChange={handleChangeValues}/>
            <label htmlFor="Autor">Autor:</label>
            <input type="text" name='name' id="name" placeholder="Nome do Autor" onChange={handleChangeValues}/>
            <label htmlFor="title">URL da Logo:</label>
            <input type="text" name='title' id="title" placeholder="Título da Foto" onChange={handleChangeValues}/>
            <button onClick={handleEditCard}>Editar</button>
            <button>Deletar</button>
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