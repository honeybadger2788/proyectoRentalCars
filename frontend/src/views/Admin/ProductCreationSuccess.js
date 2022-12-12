import { Link } from 'react-router-dom';

import styles from './ProductCreationSuccess.module.css';

function ProductCreationSuccess() {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/check.svg`}
            alt="checkmark"
          />
        </div>
        <h2>Tu producto se ha creado con éxito</h2>
        <button>
          <Link to="/">Volver</Link>
        </button>
      </div>
    </section>
  );
}

export default ProductCreationSuccess;
