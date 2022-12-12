import StarsRating from '../../../../components/StarsRating/StarsRating';

import styles from './ReservationDetail.module.css';

function ReservationDetail({ car, range }) {
  const ratingAverage =
    car.rating.length > 0
      ? Math.floor(
          car.rating.reduce((sum, current) => sum + current.score, 0) /
            car.rating.length
        )
      : 0;
  // const startDate = range.slice
  const startDate = range[0].startDate.toLocaleDateString();
  const endDate = range[0].endDate.toLocaleDateString();

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
        <article className={styles.dates}>
          <p>Check in</p>
          <p>{startDate}</p>
        </article>
        <hr className={styles.divider} />
        <article className={styles.dates}>
          <p>Check out</p>
          <p>{endDate}</p>
        </article>
        <hr className={styles.divider} />
        <button type="submit">Confirmar reserva</button>
      </section>
    </section>
  );
}

export default ReservationDetail;
