import React from 'react'
import ModalPhoto from './modalphoto'

const PhotoList = (item) => {
    return (
        <>
        <ModalPhoto autor={item.autor} id={item.id} titulo={item.titulo} local={item.local} foto={item.foto} portfolio={item.portfolio}/>
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.autor}</td>
            <td>{item.local}</td>
            <td>{item.portfolio}</td>
            <td><img src={item.foto} alt="foto" /></td>
            <td><button onClick={handleListButton}>Editar</button></td>
        </tr>
        </>
    )
}

function handleListButton(){
    let modalBg = document.querySelector('.modal-bg2')
    modalBg.classList.toggle('bg-active');
    console.log("Click")
}   

export default PhotoList