import React from 'react'
import Modal from './modal';

const ClientList = (item) => {
    return (
        <>
        <Modal name={item.nome} id={item.id} logo={item.logo} listCard={item.listCard} setListCard={item.setListCard}/>
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td><img src={item.logo} alt="Logo" /></td>
            <td><button onClick={handleListButton}>Editar</button></td>
        </tr>
        </>
    )
}

function handleListButton(){
    let modalBg = document.querySelector('.modal-bg')
    modalBg.classList.toggle('bg-active');
    console.log("Click")
}   

export default ClientList