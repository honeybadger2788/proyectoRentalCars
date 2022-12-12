import React from 'react';

import styles from './BookingCard.module.css';

export default function MyBookings({ booking }) {
  const months = [
    'ENE',
    'FEB',
    'MAR',
    'ABR',
    'MAY',
    'JUN',
    'JUL',
    'AGO',
    'SEP',
    'OCT',
    'NOV',
    'DIC',
  ];

  const startDate = new Date(booking.startDate);
  const endDate = new Date(booking.endDate);

  // se utiliza el +1 como factor de correción
  const dates = {
    checkIn: {
      day: startDate.getDate() + 1,
      month: months[startDate.getMonth()],
      year: startDate.getFullYear(),
    },
    checkOut: {
      day: endDate.getDate() + 1,
      month: months[endDate.getMonth()],
      year: endDate.getFullYear(),
    },
  };

  return (
    <div className={styles.card}>
      <div className={styles.img_container}>
        <img
          src={booking.car.images[0].url}
          alt={booking.car.images[0].title}
        />
      </div>

      <div className={styles.info_container}>
        <div className={styles.info}>
          <h3 className={styles.h3}>Información general</h3>
          <p className={styles.info_text}>{booking.car.descriptionContent}</p>
        </div>
        <div className={styles.booking_container}>
          <h3 className={styles.h3}>Fechas de reserva</h3>
          <div className={styles.date_containter}>
            <div className={styles.date} style={{ borderRight: 'solid 1px' }}>
              <p className={styles.text}>CHECK-IN</p>
              <p className={styles.number}>{dates.checkIn.day}</p>
              <p className={styles.text}>
                {dates.checkIn.month}-{dates.checkIn.year}
              </p>
            </div>
            <div className={styles.date}>
              <p className={styles.text}>CHECK-OUT</p>
              <p className={styles.number}>{dates.checkOut.day}</p>
              <p className={styles.text}>
                {dates.checkOut.month}-{dates.checkOut.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
