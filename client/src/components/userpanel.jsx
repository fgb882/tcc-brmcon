import React from 'react'

const Userpanel = () => {

    






    return (
        <section id="Userpanel">
            <div className="clientpanel">
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
                            <button type="submit" className="login-form-button">Login</button>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Teste</td>
                            <td>url</td>
                        </tr>
                        <tr>
                        <td>2</td>
                            <td>Teste</td>
                            <td>url</td>
                        </tr>
                        <tr>
                        <td>3</td>
                            <td>Teste</td>
                            <td>url</td>
                        </tr>
                    </tbody>
                </table>
                </div>
        </section>
    )
}

export default Userpanel