import styles from './Policies.module.css';

function Policies({ policies }) {
  return (
    <section>
      <h3 className={styles.title}>Qué tenés que saber</h3>
      <hr className={styles.divider} />
      <div className={styles.container}>
        <article>
          <h4 className={styles.policyTitle}>{policies?.rules?.title}</h4>
          <p>{policies?.rules?.description}</p>
        </article>
        <article>
          <h4 className={styles.policyTitle}>{policies?.security?.title}</h4>
          <p>{policies?.security?.description}</p>
        </article>
        <article>
          <h4 className={styles.policyTitle}>
            {policies?.cancellation?.title}
          </h4>
          <p>{policies?.cancellation?.description}</p>
        </article>
      </div>
    </section>
  );
}

export default Policies;
