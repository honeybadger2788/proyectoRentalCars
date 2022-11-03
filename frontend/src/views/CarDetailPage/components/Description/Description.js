import styles from './Description.module.css';

function Description({ description }) {
  return (
    <section className={styles.descriptionContainer}>
      <h2>{description.title}</h2>
      <p>{description.content}</p>
    </section>
  );
}

export default Description;
