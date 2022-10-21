import React from "react";

export default function Register(props) {
    return (
        <div>
            <h1 className='login-title'>Crear cuenta</h1>
            <form>
                <div className='name-container'>
                    <div className='input-container'>
                        <label for='firstName'>Nombre</label>
                        <input className='name'id='firstName'type='text'/>
                    </div>
                
                    <div className='input-container'>
                        <label for='lastName'>Apellido</label>
                        <input className='name'id='lastName'type='text'/>
                    </div>
                </div>
                
                <div className='input-container'>
                    <label for='email'>Correo electrónico</label>
                    <input id='email'type='email'/>
                </div>

                <div className='input-container'>
                    <label for='password'>Contraseña</label>
                    <input id='password'type='password'/>
                </div>
                
                <div className='input-container'>
                    <label for='confirmPassword'>Confirmar contraseña</label>
                    <input id='confirmPassword'type='password'/>
                </div>
                
                <button type='submit'>Crear cuenta</button>
            </form>
            <p className='small-text text-center'>¿Ya tiene una cuenta? <a href='/'>Iniciar sesión</a></p>
        </div>
    )
  }