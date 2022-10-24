import React from "react";
import styles from './Login.module.css'

export default function Login() {
    return (
        <div>
            <h1 className={styles.title}>Iniciar sesión</h1>
            <form>
                               
                <div className={styles.container}>
                    <label for='email'>Correo electrónico</label>
                    <input id='email'type='email'/>
                </div>

                <div className={styles.container}>
                    <label for='password'>Contraseña</label>
                    <input id='password'type='password'/>
                </div>
                
                <button type='submit'>Ingresar</button>
            </form>
            <p className='small-text center'>¿Aún no tenés cuenta? <a href='/'>Registrate</a></p>
        </div>
    )
  }