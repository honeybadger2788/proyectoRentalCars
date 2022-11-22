import StarsRating from '../../../../components/StarsRating/StarsRating';

import styles from './Reservation.module.css';

function ReservationDetail({ car }) {
  const ratingAverage =
    car.rating.length > 0
      ? Math.floor(
          car.rating.reduce((sum, current) => sum + current.score, 0) /
            car.rating.length
        )
      : 0;

  return (
    <section className={styles.container}>
      <h2>Detalle de la reserva</h2>
      <img src={car.images[0].url} alt={car.images[0].title} />
      <section className={styles.body}>
        <div className={styles.title}>
          <h4>{car.category.title}</h4>
          <h2>{car.title}</h2>
          <div>
            <StarsRating stars={ratingAverage} />
          </div>
        </div>
        <p>
          <span className={styles.locationIcon}>
            <i className="fa-solid fa-location-dot"></i>
          </span>
          {car.city.name}, {car.city.state}, Argentina
        </p>
        <hr className={styles.divider} />
        <article className={styles.checkIn}>
          <p>Check in</p>
          <p>23/11/2021</p>
        </article>
        <hr className={styles.divider} />
        <article className={styles.checkIn}>
          <p>Check out</p>
          <p>27/11/2021</p>
        </article>
        <hr className={styles.divider} />
        <button>Confirmar reserva</button>
      </section>
    </section>
  );
}

export default ReservationDetail;
