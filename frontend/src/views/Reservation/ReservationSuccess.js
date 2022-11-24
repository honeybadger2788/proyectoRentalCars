import { Link } from 'react-router-dom';

import styles from './ReservationSuccess.module.css';

function ReservationSuccess() {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/check.svg`}
            alt="checkmark"
          />
        </div>
        <h2>¡Muchas gracias!</h2>
        <p>Su reserva se ha realizado con éxito</p>
        <Link to="/">
          <button>OK</button>
        </Link>
      </div>
    </section>
  );
}

export default ReservationSuccess;
