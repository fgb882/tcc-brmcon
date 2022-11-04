import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'

const Photopanel = () => {
    
    const [photoinfo, setPhotoinfo] = useState();
    const [newPhotoInfo, setNewPhotoInfo] = useState()

    const handleChangeValues = (value) => {
        setNewPhotoInfo((prevValue) => ({
            ...prevValue, 
            [value.target.name]: value.target.value,
        }));
    };

    const handleClickButton = () => {
        Axios.post("http://localhost:3001/setphoto", {
            autor: newPhotoInfo.autor,
            titulo: newPhotoInfo.titulo,
            local: newPhotoInfo.local,
            foto: newPhotoInfo.foto,
            portfolio: newPhotoInfo.portfolio,

        }).then((response) =>{
            console.log(response);
        })
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/getphoto").then((response) => {
            setPhotoinfo(response.data);
        });
    });



    return (
        <section id="Photopanel">
            <div className="clientpanel">
                <div className="login-panel">
                    <div className='login-title'>
                        <h3>Registro de Foto</h3>
                    </div>
                    <div className="login-form">
                        <div className='login-form-title'>
                            <h3>Coloque as Informações de sua Foto:</h3>
                        </div>
                        <div className="login-form-content">
                            <input type="text" className="login-form-input" name="autor" placeholder="Autor" onChange={handleChangeValues}/>
                            <input type="text" className="login-form-input" name="titulo" placeholder="Título" onChange={handleChangeValues}/>
                            <input type="text" className="login-form-input" name="local" placeholder="Local" onChange={handleChangeValues}/>
                            <input type="text" className="login-form-input" name="foto" placeholder="URL da Foto" onChange={handleChangeValues}/>
                            <input type="text" className="login-form-input" name="portfolio" placeholder="Portfólio (Coloque 1 para Público, 2 para Privado)" onChange={handleChangeValues}/>
                            <button type="submit" className="login-form-button" onClick={() => handleClickButton()}>Login</button>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="client-table">
            <table className="client-content edit">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Autor</th>
                            <th>Título</th>
                            <th>Local</th>
                            <th>Foto</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {typeof photoinfo !== "undefined" &&
                            photoinfo.map(item => {

                                return (
                                  <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{ item.autor }</td>
                                    <td>{item.titulo}</td>
                                    <td>{item.local}</td>
                                    <td><img src={item.foto} alt="foto" /></td>
                                    <td><button>+</button></td>
                                  </tr>
                                );
                              })}
                    </tbody>
                </table>
                </div>
        </section>
    )
}

export default Photopanel