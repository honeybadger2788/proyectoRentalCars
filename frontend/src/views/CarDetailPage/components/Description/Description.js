import styles from './Description.module.css';

function Description({ descriptionTitle, descriptionContent }) {
  return (
    <section className={styles.descriptionContainer}>
      <h2>{descriptionTitle}</h2>
      <p>{descriptionContent}</p>
    </section>
  );
}

export default Description;
