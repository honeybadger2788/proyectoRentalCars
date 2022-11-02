import styles from './Error.module.css';

function ErrorPage() {
  return (
    <section className={styles.container}>
      <h1>Opps!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </section>
  );
}

export default ErrorPage;
