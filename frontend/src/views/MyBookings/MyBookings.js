import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import BookingCard from '../../components/BookingCard/BookingCard'
import { useAuthContext } from '../../hooks/useAuthContext';
import styles from './MyBookings.module.css';


export default function MyBookings() {
    const [ bookings, setBookings ] = useState([])
    const { user } = useAuthContext();

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${user.jwt}`);

        fetch(`http://grupo2backend-env.eba-ssmahfch.us-east-2.elasticbeanstalk.com/booking/user/${user.id}`,{
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow',
        })
        .then(response => response.json())
        .then(bookings => setBookings(bookings))
        .catch(e => console.log(e))
    },[user])

    return (
        <div>
            <Header category={""} title={"Mis Reservas"} />
            {bookings.length !== 0 ?
                <section className={styles.section}>
                    {
                        bookings.map((booking,id) => (
                            <BookingCard key={id} booking={booking}/>
                        ))
                    }
                </section> :
                <section className={styles.container}>
                    <div className={styles.card}>
                        <i class="fa-solid fa-circle-exclamation fa-4x"></i>
                        <p>Aún no has efectuado ninguna reserva</p>
                        <Link to="/">
                            <button>Volver a home</button>
                        </Link>
                    </div>
                </section>}
        </div>
    )
  }