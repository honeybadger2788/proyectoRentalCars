import React, { useState } from "react"
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom";
import styles from './Login.module.css'

export default function Login() {
    const navigate = useNavigate()
    const [wrongCredentials, setWrongCredentials] = useState(false)
    const { register, reset ,formState: { errors }, handleSubmit } = useForm();
    
    const user = {
        firstName: 'Horacio',
        lastName: 'Test',
        email: 'test@test.com',
        password: '123456'
    }

    const onSubmit = data => {
        if (user.email === data.email && user.password === data.password) {
            setWrongCredentials(false)
            reset()
            sessionStorage.setItem('userLoggedIn', true)
            sessionStorage.setItem('user', JSON.stringify(user))
            navigate('/')
            window.location.reload() //Dudoso
        }
        else setWrongCredentials(true)
    }

    return (
        <div>
            <h1 className={styles.title}>Iniciar sesión</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {wrongCredentials && <p className={styles.error}>Por favor vuelva a intentarlo, sus credenciales son inválidas</p>}           
                <div className={styles.container}>
                    <label htmlFor='email'>Correo electrónico</label>
                    <input id='email'
                        type='email'
                        name='email'
                        className={errors.email||wrongCredentials ? styles.error : undefined }
                        {...register('email',
                            {
                                required: { value: true, message: 'Campo obligatorio' },
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Ingrese un mail válido'
                                }
                            })} />
                    <p className={styles.error}>{errors.email && errors.email.message}</p>
                </div>

                <div className={styles.container}>
                    <label htmlFor='password'>Contraseña</label>
                    <input id='password'
                        type='password'
                        name='password'
                        className={errors.password||wrongCredentials ? styles.error : undefined}
                        {...register('password',
                            {
                                required: {value: true, message: 'Campo obligatorio'},
                                minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' }
                            })} />
                    <p className={styles.error}>{errors.password && errors.password.message}</p>
                </div>
                
                <button type='submit'>Ingresar</button>
            </form>
            <p className='small-text center'>¿Aún no tenés cuenta? <Link to='/register'>Registrate</Link></p>
        </div>
    )
  }