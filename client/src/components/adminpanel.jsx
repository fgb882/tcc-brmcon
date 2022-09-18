import React from 'react'
import { useState } from 'react'
import Axios from 'axios'

const Adminpanel = () => {
    const [values, SetValues] = useState();
    console.log(values)
    const handleChangeValues = (value) => {
        SetValues(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    }

    const handleClickButton = () => {
        Axios.post("http://localhost:3001/setclient",
        {
            name: values.name,
            logo: values.logo,
        }).then((response) => {
            console.log(response)
        })
    };


    return (
        <div className="panel">
            <h1>Painel de Administrador</h1>
            <div className="client-panel">
                <h3>Clientes</h3>
                <div className="client-panel-register">
                    <h4>Cadastro de Cliente</h4>
                    <label>Nome</label>
                    <input type="text" name="name" placeholder='Nome' id="clientname" onChange={handleChangeValues} />
                    <label>Logo URL</label>
                    <input type="text" name="logo" placeholder='Image URL' id="clientlogo" onChange={handleChangeValues} />
                    <button onClick={() => handleClickButton()}>Cadastro</button>
                </div>
            </div>
            <div className="photopanel">
                <h3>Fotos</h3>
            </div>
            <div className="userspanel">
                <h3>Usuários Registrados</h3>
            </div>

        </div>
    )
}

export default Adminpanel