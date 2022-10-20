import React from 'react'

const Forms = () => {
    return (
        <section id="form">
            <div className="form container">
                <div className="form-item">
                    <h2>Fale Conosco!</h2>
                    <form action="https://formsubmit.co/felipegb882@gmail.com" method="POST">
                        <label for="name">Nome</label>
                        <input type="text" name="name" placeholder="Nome" required />
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder='Email' required />
                        <label for="message">Mensagem</label>
                        <textarea name="message" placeholder='Mensagem' required />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Forms