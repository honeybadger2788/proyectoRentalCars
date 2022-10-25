import React, { useEffect, useState } from "react"
//import { useNavigate } from 'react-router-dom';
import styles from './User.module.css'

export default function User(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    const onClickLogout = () => {
        sessionStorage.clear()
        window.location.reload() //Dudoso
    }

    useEffect(() => {
        if (props.user) {
            setFirstName(props.user.firstName)
            setLastName(props.user.lastName)
        }
    }, [props.user])
    

    return (
        <div className={styles.container}>
            <div className={styles.avatar}><h2 className={styles.h2}>{firstName[0]+lastName[0]}</h2></div>
            <h3 className={styles.h3}>Hola, <button className={styles.userBtn}>{firstName + ' ' + lastName}</button></h3>
            <h3 className={styles.close} onClick={onClickLogout}>x</h3>
        </div>
    )
  }