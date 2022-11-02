import StarsRating from '../../../../components/StarsRating/StarsRating';

import styles from './Location.module.css';

function Location({ distance, location, rating }) {
  return (
    <section className={styles.container}>
      <div className={styles.locationContainer}>
        <p>
          <span className={styles.locationIcon}>
            <i className="fa-solid fa-location-dot"></i>
          </span>
          {location}
        </p>
        <p>{distance}</p>
      </div>
      <div className={styles.ratingContainer}>
        <div className={styles.starContainer}>
          <p>{rating.title}</p>
          <div>
            <StarsRating stars={rating.stars} />
          </div>
        </div>
        <div className={styles.ratingScoreContainer}>
          <p>{rating.score}</p>
        </div>
      </div>
    </section>
  );
}

export default Location;
