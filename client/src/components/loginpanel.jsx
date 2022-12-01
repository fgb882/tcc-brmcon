import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Loginpanel = () => {

    const navigate = useNavigate()

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    Axios.defaults.withCredentials = true;

    const login = async () => {
        const response = await Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        })
        if (response.data.message) {
            setLoginStatus(response.data.message);
        } else {
            setLoginStatus(response.data[0].username);
            console.log('teste')
        }
    };

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            username: usernameReg,
            password: passwordReg,
            role: "user",
        }).then((response) => {
            console.log(response);
        })
    }

    const handleLogin = async () => {
        await login();
        await redirect();
    }


    const [loginStatus, setLoginStatus] = useState('');


    const redirect = async () => {
        try{
        const response = await Axios.get("http://localhost:3001/login")
        if (response.data.loggedIn == true) {
            setLoginStatus(response.data.user[0].username);
            console.log(response.data.loggedIn);
            navigate("/admin")
        }
        }catch(e){
            console.log(e);
        }
    }



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
                        <input type="text" className="login-form-input" name="lg_username" placeholder="Usuário" onChange={(e) => {
                            setUsername(e.target.value);
                        }} />
                        <input type="password" className="login-form-input" name="lg_senha" placeholder="Senha" onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                        <button type="submit" className="login-form-button" onClick={() => {
                            handleLogin();
                        }}>Login</button>
                    </div>
                </div>

                <h3>{loginStatus}</h3>
            </div>
        </div>
    )
}

export default Loginpanel