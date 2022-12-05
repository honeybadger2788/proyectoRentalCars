import React, { useState } from "react"
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom";
import {useLogin} from '../../hooks/useLogin';
import styles from './Login.module.css'

export default function Login() {
    const navigate = useNavigate()
    const { login } = useLogin();
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState()
    const { register, reset ,formState: { errors }, handleSubmit } = useForm();
    
    const onSubmit = async (data) => {
        const { error, isLoading } = await login(data.username, data.password);
        setIsLoading(isLoading)
        setError(error)
        if (!error) {
            reset()
            navigate('/')
        }
    }

    return (
        <div>
            { isLoading && <p>Loading...</p>}
            <h1 className={styles.title}>Iniciar sesión</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {error && <p className={styles.error}>{error}</p>}
                <div className={styles.container}>
                    <label htmlFor='email'>Correo electrónico</label>
                    <input id='email'
                        type='email'
                        name='username'
                        className={errors.username||error ? styles.error : undefined }
                        {...register('username',
                            {
                                required: { value: true, message: 'Campo obligatorio' },
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Ingrese un mail válido'
                                }
                            })} />
                    <p className={styles.error}>{errors.username && errors.username.message}</p>
                </div>

                <div className={styles.container}>
                    <label htmlFor='password'>Contraseña</label>
                    <input id='password'
                        type='password'
                        name='password'
                        className={errors.password||error ? styles.error : undefined}
                        {...register('password',
                            {
                                required: {value: true, message: 'Campo obligatorio'}
                            })} />
                    <p className={styles.error}>{errors.password && errors.password.message}</p>
                </div>
                
                <button type='submit'>Ingresar</button>
            </form>
            <p className='small-text center'>¿Aún no tenés cuenta? <Link to='/register'>Registrate</Link></p>
        </div>
    )
  }