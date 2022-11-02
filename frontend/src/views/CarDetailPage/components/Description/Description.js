import styles from './Description.module.css';

function Description({ description }) {
  return (
    <section className={styles.descriptionContainer}>
      <h3>{description.title}</h3>
      <p>{description.content}</p>
    </section>
  );
}

export default Description;
