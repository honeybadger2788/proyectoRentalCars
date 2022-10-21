import React from "react";

export default function Login(props) {
    return (
        <div>
            <h1 className='login-title'>Iniciar sesión</h1>
            <form>
                               
                <div className='input-container'>
                    <label for='email'>Correo electrónico</label>
                    <input id='email'type='email'/>
                </div>

                <div className='input-container'>
                    <label for='password'>Contraseña</label>
                    <input id='password'type='password'/>
                </div>
                
                <button type='submit'>Ingresar</button>
            </form>
            <p className='small-text text-center'>¿Aún no tenés cuenta? <a href='/'>Registrate</a></p>
        </div>
    )
  }