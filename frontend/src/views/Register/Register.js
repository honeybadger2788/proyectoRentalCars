import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import styles from './Register.module.css'

export default function Register() {
    const navigate = useNavigate()
    const [signupError, setSignupError] = useState(false)
    const [errorMessage, setErrorMessage] = useState()
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    
    const onSubmit = data => {
        if (data.password === data.confirmPassword) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password
            });

              var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            
            console.log(raw)
              
              fetch("http://localhost:8080/users/signup", requestOptions)
                .then(response => response.json())
                  .then(result => {
                      if (result.jwt) {
                        console.log("OK")
                        setSignupError(false)
                        reset()
                        sessionStorage.setItem('userLoggedIn', true)
                          sessionStorage.setItem('user', JSON.stringify({
                              firstName: data.firstName,
                              lastName: data.lastName
                          }))
                        sessionStorage.setItem('token', JSON.stringify(result.jwt))
                          navigate('/')
                          window.location.reload() //Dudoso
                    } else setErrorMessage("Lamentablemente no ha podido registrarse. Por favor intente más tarde")
                })
                .catch(error =>
                    setErrorMessage("Lamentablemente no ha podido registrarse. Por favor intente más tarde"));
        } else setErrorMessage("Las contraseñas no coinciden")
    }

    return (
        <div>
            <h1 className={styles.title}>Crear cuenta</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <p className={styles.error}>{errorMessage}</p>
                <div className={styles.nameContainer}>
                    <div className={styles.container}>
                        <label htmlFor='firstName'>Nombre</label>
                        <input className={styles.name}
                            id='firstName'
                            type='text'
                            {...register('firstName',
                            {
                                required: {value: true, message: 'Campo obligatorio'}
                                })} />
                        <p className={styles.error}>{errors.firstName && errors.firstName.message}</p>
                    </div>
                    <div className={styles.container}>
                        <label htmlFor='lastName'>Apellido</label>
                        <input className={styles.name}
                            id='lastName'
                            type='text'
                            {...register('lastName',
                            {
                                required: {value: true, message: 'Campo obligatorio'}
                                })} />
                        <p className={styles.error}>{errors.lastName && errors.lastName.message}</p>
                    </div>
                </div>
                
                <div className={styles.container}>
                    <label htmlFor='email'>Correo electrónico</label>
                    <input id='email'
                        type='email'
                        className={errors.email||signupError ? styles.error : undefined }
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
                        className={errors.email||signupError ? styles.error : undefined }
                        {...register('password',
                        {
                            required: {value: true, message: 'Campo obligatorio'},
                            minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' }
                            })} />
                    <p className={styles.error}>{errors.password && errors.password.message}</p>
                </div>
                
                <div className={styles.container}>
                    <label htmlFor='confirmPassword'>Confirmar contraseña</label>
                    <input id='confirmPassword'
                        type='password'
                        className={errors.email||signupError ? styles.error : undefined }
                        {...register('confirmPassword',
                        {
                            required: {value: true, message: 'Campo obligatorio'},
                            minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' }
                            })} />
                    <p className={styles.error}>{errors.confirmPassword && errors.confirmPassword.message}</p>
                </div>
                
                <button type='submit'>Crear cuenta</button>
            </form>
            <p className='small-text center'>¿Ya tiene una cuenta? <Link to='/login'>Iniciar sesión</Link></p>
        </div>
    )
  }