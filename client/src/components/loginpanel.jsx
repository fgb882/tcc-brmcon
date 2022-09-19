import React from 'react'
import { Link } from 'react-router-dom'
//import { useState } from 'react'
//import Axios from 'axios'

const Loginpanel = props => {

  //  const [values, SetValues] = useState();
   // console.log(values)
   // const handleChangeValues = (value) => {
   //     SetValues(prevValue => ({
   //         ...prevValue,
   //         [value.target.name]: value.target.value,
  //      }));
  //  }


    return (
        <div className="panel">
            <div className="login-panel">
                <div className='login-title'>
                    <h3>Login</h3>
                </div>
                <div className="login-form">
                    <div className='login-form-title'>
                        <h3>Bem-vindo!</h3>
                    </div>
                    <div className="login-form-content">
                        <input type="text" className="login-form-input" name="lg_username" placeholder="Usuário" />
                        <input type="password" className="login-form-input" name="lg_senha" placeholder="Senha" />
                        <Link to="/admin"><button type="submit" className="login-form-button">Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginpanel