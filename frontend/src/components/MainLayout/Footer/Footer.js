import Social from '../Social/Social';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>©2021 Digital Booking</p>
      <section className={styles.social}>
        <Social />
      </section>
    </footer>
  );
}

export default Footer;
