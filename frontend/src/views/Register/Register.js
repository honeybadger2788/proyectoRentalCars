import React from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'
import styles from './Register.module.css'

export default function Register() {
    return (
        <div>
            <h1 className={styles.title}>Crear cuenta</h1>
            <form>
                <div className={styles.nameContainer}>
                    <div className={styles.container}>
                        <label htmlFor='firstName'>Nombre</label>
                        <input className={styles.name}id='firstName'type='text'/>
                    </div>
                
                    <div className={styles.container}>
                        <label htmlFor='lastName'>Apellido</label>
                        <input className={styles.name}id='lastName'type='text'/>
                    </div>
                </div>
                
                <div className={styles.container}>
                    <label htmlFor='email'>Correo electrónico</label>
                    <input id='email'type='email'/>
                </div>

                <div className={styles.container}>
                    <label htmlFor='password'>Contraseña</label>
                    <input id='password'type='password'/>
                </div>
                
                <div className={styles.container}>
                    <label htmlFor='confirmPassword'>Confirmar contraseña</label>
                    <input id='confirmPassword'type='password'/>
                </div>
                
                <button type='submit'>Crear cuenta</button>
            </form>
            <p className='small-text center'>¿Ya tiene una cuenta? <Link to='/login'>Iniciar sesión</Link></p>
        </div>
    )
  }