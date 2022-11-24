import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useSignup } from '../../hooks/useSignup';

import styles from './Register.module.css';

export default function Register() {
  const navigate = useNavigate();
  const { signup, error, isLoading } = useSignup();
  const [signupError, setSignupError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password === data.confirmPassword) {
      await signup(data.firstName, data.lastName, data.email, data.password);
      reset()
      // no funciona el envio de errores
      if (error) {
        setSignupError(true)
        setErrorMessage(error);
      }
      if (!error) navigate('/');
    } else setErrorMessage('Las contraseñas no coinciden');
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <h1 className={styles.title}>Crear cuenta</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className={styles.error}>{errorMessage}</p>
        <div className={styles.nameContainer}>
          <div className={styles.container}>
            <label htmlFor="firstName">Nombre</label>
            <input
              className={styles.name}
              id="firstName"
              type="text"
              {...register('firstName', {
                required: { value: true, message: 'Campo obligatorio' },
              })}
            />
            <p className={styles.error}>
              {errors.firstName && errors.firstName.message}
            </p>
          </div>
          <div className={styles.container}>
            <label htmlFor="lastName">Apellido</label>
            <input
              className={styles.name}
              id="lastName"
              type="text"
              {...register('lastName', {
                required: { value: true, message: 'Campo obligatorio' },
              })}
            />
            <p className={styles.error}>
              {errors.lastName && errors.lastName.message}
            </p>
          </div>
        </div>

        <div className={styles.container}>
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            className={errors.email || signupError ? styles.error : undefined}
            {...register('email', {
              required: { value: true, message: 'Campo obligatorio' },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Ingrese un mail válido',
              },
            })}
          />
          <p className={styles.error}>{errors.email && errors.email.message}</p>
        </div>

        <div className={styles.container}>
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            className={errors.email || signupError ? styles.error : undefined}
            {...register('password', {
              required: { value: true, message: 'Campo obligatorio' },
              minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 6 caracteres',
              },
            })}
          />
          <p className={styles.error}>
            {errors.password && errors.password.message}
          </p>
        </div>

        <div className={styles.container}>
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input
            id="confirmPassword"
            type="password"
            className={errors.email || signupError ? styles.error : undefined}
            {...register('confirmPassword', {
              required: { value: true, message: 'Campo obligatorio' },
              minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 6 caracteres',
              },
            })}
          />
          <p className={styles.error}>
            {errors.confirmPassword && errors.confirmPassword.message}
          </p>
        </div>

        <button type="submit">Crear cuenta</button>
      </form>
      <p className="small-text center">
        ¿Ya tiene una cuenta? <Link to="/login">Iniciar sesión</Link>
      </p>
    </div>
  );
}
