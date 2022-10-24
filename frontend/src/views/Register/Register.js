import React from "react";
import styles from './Register.module.css'

export default function Register() {
    return (
        <div>
            <h1 className={styles.title}>Crear cuenta</h1>
            <form>
                <div className={styles.nameContainer}>
                    <div className={styles.container}>
                        <label for='firstName'>Nombre</label>
                        <input className={styles.name}id='firstName'type='text'/>
                    </div>
                
                    <div className={styles.container}>
                        <label for='lastName'>Apellido</label>
                        <input className={styles.name}id='lastName'type='text'/>
                    </div>
                </div>
                
                <div className={styles.container}>
                    <label for='email'>Correo electrónico</label>
                    <input id='email'type='email'/>
                </div>

                <div className={styles.container}>
                    <label for='password'>Contraseña</label>
                    <input id='password'type='password'/>
                </div>
                
                <div className={styles.container}>
                    <label for='confirmPassword'>Confirmar contraseña</label>
                    <input id='confirmPassword'type='password'/>
                </div>
                
                <button type='submit'>Crear cuenta</button>
            </form>
            <p className='small-text center'>¿Ya tiene una cuenta? <a href='/'>Iniciar sesión</a></p>
        </div>
    )
  }