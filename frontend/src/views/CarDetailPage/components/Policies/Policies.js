import styles from './Policies.module.css';

function Policies({ policies }) {
  return (
    <section>
      <h3 className={styles.title}>Qué tenés que saber</h3>
      <hr className={styles.divider} />
      <div className={styles.container}>
        {policies.map((policy) => (
          <article key={policy.title}>
            <h4 className={styles.policyTitle}>{policy.title}</h4>
            <p>{policy.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Policies;
