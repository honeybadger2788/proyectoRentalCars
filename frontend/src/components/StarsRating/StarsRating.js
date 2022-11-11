import { v4 as uuidv4 } from 'uuid';

import styles from './StarsRating.module.css';

function StarsRating({ stars }) {
  const hollowStars = 5 - stars;

  return (
    <>
      {[...Array(stars)].map((star) => (
        <span className={styles.filledStar} key={uuidv4()}>
          <i className="fa-solid fa-star"></i>
        </span>
      ))}

      {[...Array(hollowStars)].map((star) => (
        <span className={styles.hollowStar} key={uuidv4()}>
          <i className="fa-solid fa-star"></i>
        </span>
      ))}
    </>
  );
}

export default StarsRating;
