import React from 'react';
import styles from './Search.module.css';
import DateRangeComp from '../DateRangePicker/DateRangePicker';

export default function Search() {
  return (
    <div className={styles.search}>
      <h1 className={styles.title}>
        Busca ofertas en hoteles, casas y mucho más
      </h1>
      <form>
        <div className={styles.formContainer}>
          <div className={styles.container}>
            <select className={styles.select}>
              <option selected value="default">
                ¿A dónde vamos?
              </option>
              <option value="bariloche">
                <p>San Carlos de Bariloche</p>
                <p>Argentina</p>
              </option>
              <option value="bsas">Buenos Aires</option>
              <option value="mendoza">Mendoza</option>
              <option value="cordoba">Córdoba</option>
            </select>
          </div>

          <div className={styles.container}>
            <DateRangeComp />
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.button} type="submit">
              Buscar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
