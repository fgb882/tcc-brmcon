import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import ClientList from './clientlist'

const ClientPanel = () => {


    const [clients, setClient] = useState()
    const [newClient, setNewClient] = useState()

    useEffect(() => {
        Axios.get("http://localhost:3001/getclient").then((response) => {
            setClient(response.data);
        });
    }, []);



    const handleClickButton = () => {
        Axios.post("http://localhost:3001/setclient", {
            name: newClient.name,
            logo: newClient.logo,
        }).then((response) =>{
            console.log(response);
            document.location.reload()
        })
    }

    const handleChangeValues = (value) => {
        setNewClient((prevValue) => ({
            ...prevValue, 
            [value.target.name]: value.target.value,
        }));
    };



    console.log(newClient);

    return (
        <section id="clientpanel">
            <div className="clientpanel">
                <div className="login-panel">
                    <div className='login-title'>
                        <h3>Registro de Clientes</h3>
                    </div>
                    <div className="login-form">
                        <div className='login-form-title'>
                            <h3>Coloque as Informações do Cliente:</h3>
                        </div>
                        <div className="login-form-content">
                            <input type="text" className="login-form-input" name="name" placeholder="Nome" onChange={handleChangeValues}/>
                            <input type="text" className="login-form-input" name="logo" placeholder="URL da Logo" onChange={handleChangeValues}/>
                            <button type="submit" className="login-form-button" onClick={() => handleClickButton()}>Registrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="client-table">
                <table className="client-content">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Logo</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {typeof clients !== "undefined" &&
                            clients.map(item => {
                                return (
                                  <ClientList id={item.id} nome={item.nome} logo={item.logo} />
                                );
                              })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}




export default ClientPanel