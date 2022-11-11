import styles from './Characteristics.module.css';

const icons = {
  ac: <i className="fa-solid fa-snowflake"></i>,
  car: <i className="fa-solid fa-car"></i>,
  carryOn: <i className="fa-solid fa-suitcase-rolling"></i>,
  door: <i className="fa-solid fa-door-open"></i>,
  km: <i className="fa-solid fa-road"></i>,
  passengers: <i className="fa-solid fa-person"></i>,
  suitcase: <i className="fa-solid fa-suitcase"></i>,
};

function Characteristics({ characteristic }) {
  return (
    <section className={styles.characteristicsWrapper}>
      <h3 className={styles.title}>Qué ofrece este lugar?</h3>
      <hr className={styles.divider} />
      <div className={styles.container}>
        <article>
          <p>
            <span className={styles.icon}>{icons.passengers}</span>{' '}
            {characteristic?.passengers}{' '}
            {characteristic?.passengers > 1 ? 'personas' : 'persona'}
          </p>
        </article>
        <article>
          <p>
            <span className={styles.icon}>{icons.suitcase}</span>{' '}
            {characteristic?.largeBagsCapacity}{' '}
            {characteristic?.largeBagsCapacity > 1 ? 'Maletas' : 'Maleta'}
          </p>
        </article>
        <article>
          <p>
            <span className={styles.icon}>{icons.carryOn}</span>{' '}
            {characteristic?.smallBagsCapacity}{' '}
            {characteristic?.smallBagsCapacity > 1
              ? 'Equipajes de mano'
              : 'Equipaje de mano'}
          </p>
        </article>
        {characteristic?.ac && (
          <article>
            <p>
              <span className={styles.icon}>{icons.ac}</span> A/C
            </p>
          </article>
        )}
        {characteristic?.ilimitedKm && (
          <article>
            <p>
              <span className={styles.textIcon}>Km</span> Ilimitado
            </p>
          </article>
        )}
        {characteristic?.automatic ? (
          <article>
            <p>
              <span className={styles.textIcon}>A</span>
              Automático
            </p>
          </article>
        ) : (
          <article>
            <p>
              <span className={styles.textIcon}>M</span>
              Manual
            </p>
          </article>
        )}
        <article>
          <p>
            <span className={styles.icon}>{icons.car}</span>{' '}
            {characteristic?.doors} puertas
          </p>
        </article>
      </div>
    </section>
  );
}

export default Characteristics;
