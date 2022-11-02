import styles from './Characteristics.module.css';

const icons = {
  passengers: <i className="fa-solid fa-person"></i>,
  suitcases: <i className="fa-solid fa-suitcase"></i>,
  ac: <i className="fa-solid fa-snowflake"></i>,
  km: <i className="fa-solid fa-road"></i>,
  door: <i className="fa-solid fa-door-open"></i>,
  car: <i className="fa-solid fa-car"></i>,
};

function Characteristics({ characteristics }) {
  return (
    <section className={styles.characteristicsWrapper}>
      <h3 className={styles.title}>Qué ofrece este lugar?</h3>
      <hr className={styles.divider} />
      <div className={styles.container}>
        <article>
          {icons.passengers} {characteristics.passengers}
        </article>
        <article>
          {icons.suitcases} {characteristics.suitcases}
        </article>
        <article>
          {icons.ac} {characteristics.ac}
        </article>
        <article>
          <span className={styles.textIcon}>Km</span> {characteristics.km}
        </article>
        <article>
          <span className={styles.textIcon}>
            {characteristics.transmission.slice(0, 1)}
          </span>
          {characteristics.transmission}
        </article>
        <article>
          {icons.car} {characteristics.doors}
        </article>
      </div>
    </section>
  );
}

export default Characteristics;
