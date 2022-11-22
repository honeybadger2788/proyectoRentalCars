import { Link } from 'react-router-dom';

import styles from './Card.module.css';

export default function Card(props) {
  return (
    <div className={styles.card_container}>
      <img src={props.img} alt={props.title} />

      <div className={styles.details}>
        <h4>{props.category}</h4>
        <h1>{props.title}</h1>
        <p className={styles.location}>{props.location}</p>
        <p>{props.description}</p>
        <button>
          <Link to={`product/${props.id}`}>Ver más</Link>
        </button>
      </div>
    </div>
  );
}
