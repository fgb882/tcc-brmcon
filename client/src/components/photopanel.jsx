import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import PhotoList from './photolist'

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
            portfolio_id: newPhotoInfo.portfolio,

        }).then((response) =>{
            console.log(response);
            document.location.reload()
        })
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/getphoto").then((response) => {
            setPhotoinfo(response.data);
        });
    }
    );



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
                            <input type="text" className="login-form-input" name="portfolio" placeholder="Portfólio (Coloque 1 para Público, 2 para Privado)" onChange={handleChangeValues} hidden value={'1'}/>
                            <button type="submit" className="login-form-button" onClick={() => handleClickButton()}>Registrar</button>
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
                                  <PhotoList autor={item.autor} id={item.id} titulo={item.titulo} local={item.local} foto={item.foto} portfolio={item.portfolio} />
                                );
                              })}
                    </tbody>
                </table>
                </div>
        </section>
    )
}

export default Photopanel