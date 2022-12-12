import styles from './PersonalData.module.css';

function PersonalData({ user }) {
  return (
    <section className={styles.container}>
      <h3>Tus datos</h3>
      <div className={styles.card}>
        <article>
          <label htmlFor="firstName">Nombre</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder={user.firstName}
            disabled
          />
        </article>
        <article>
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder={user.lastName}
            disabled
          />
        </article>
        <article>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={user.email}
            disabled
          />
        </article>
      </div>
    </section>
  );
}

export default PersonalData;
