import StarsRating from '../StarsRating/StarsRating';

import styles from './Location.module.css';

function Location({ city, rating }) {
  const ratingAverage =
    rating.length > 0
      ? Math.floor(
          rating.reduce((sum, current) => sum + current.score, 0) /
            rating.length
        )
      : 0;
  return (
    <section className={styles.container}>
      <div className={styles.locationContainer}>
        <p>
          <span className={styles.locationIcon}>
            <i className="fa-solid fa-location-dot"></i>
          </span>
          {city.name}, {city.state}, Argentina
        </p>
      </div>
      {rating.length > 0 && (
        <div className={styles.ratingContainer}>
          <div className={styles.starContainer}>
            <p>{ratingAverage >= 4 ? 'Excelente' : 'Bueno'}</p>
            <div>
              <StarsRating stars={ratingAverage} />
            </div>
          </div>
          <div className={styles.ratingScoreContainer}>
            <p>{ratingAverage}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Location;
