import { Link } from 'react-router-dom';

import StarsRating from '../../StarsRating/StarsRating';

import styles from './Card.module.css';

export default function Card({
  category,
  descriptionContent,
  id,
  img,
  title,
  rating,
  location,
}) {
  const ratingAverage =
    rating.length > 0
      ? Math.floor(
          rating.reduce((sum, current) => sum + current.score, 0) /
            rating.length
        )
      : 0;

  return (
    <div className={styles.cardContainer}>
      <section className={styles.imgContainer}>
        <img src={img} alt={title} className={styles.productImage} />
        <svg
          width="21"
          height="19"
          viewBox="0 0 21 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.favorite}
        >
          <path
            d="M10.5 19L8.97183 17.6394C7.23005 16.0844 5.96479 14.9344 5.17606 14.1893C4.38732 13.4442 3.5 12.5209 2.51408 11.4194C1.56103 10.318 0.903756 9.32992 0.542253 8.45524C0.180751 7.54817 0 6.62489 0 5.68542C0 4.09804 0.542253 2.75362 1.62676 1.65217C2.74413 0.550725 4.12441 0 5.76761 0C7.67371 0 9.25117 0.7289 10.5 2.1867C11.7488 0.7289 13.3263 0 15.2324 0C16.8756 0 18.2394 0.550725 19.3239 1.65217C20.4413 2.75362 21 4.09804 21 5.68542C21 6.94885 20.5728 8.26087 19.7183 9.62148C18.8638 10.9821 17.9272 12.1645 16.9084 13.1688C15.9225 14.1731 14.2958 15.6795 12.0282 17.688L10.5 19Z"
            fill="#EB1D36"
          />
        </svg>
      </section>

      <section className={styles.bodyContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.titleContainer}>
            <div>
              <h4>
                {category}{' '}
                <span>
                  {rating.length > 0 && <StarsRating stars={ratingAverage} />}
                </span>
              </h4>
              <h2>{title}</h2>
            </div>

            {rating.length > 0 && (
              <div className={styles.ratingContainer}>
                <div className={styles.ratingScoreContainer}>
                  <p>{ratingAverage}</p>
                </div>
                <p>{ratingAverage >= 4 ? 'Excelente' : 'Bueno'}</p>
              </div>
            )}
          </div>

          <p className={styles.location}>
            <span className={styles.locationIcon}>
              <i className="fa-solid fa-location-dot"></i>
            </span>
            {location}
          </p>
          <p>{`${descriptionContent?.slice(0, 200)}...`} </p>
        </div>

        <div className={styles.buttonContainer}>
          <Link to={`product/${id}`}>
            <button>Ver más</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
