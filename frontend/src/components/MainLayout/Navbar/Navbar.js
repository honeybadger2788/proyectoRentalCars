import { Link, useLocation } from 'react-router-dom';

import styles from './Navbar.module.css';

function Navbar({ hidden, toogleDrawer }) {
  let location = useLocation();

  const onClickHamburger = () => {
    toogleDrawer();
  };

  return (
    <nav className={`${styles.navbar} ${hidden && styles.navbar_hidden}`}>
      <Link to="/">
        <div className={styles.logo_container}>
          <img
            alt="logo"
            className={styles.logo_image}
            src={`${process.env.PUBLIC_URL}images/logo-1.svg`}
          />
          <p className={styles.logo_text}>Sentite como en tu hogar</p>
        </div>
      </Link>
      <section className={styles.nav_menu}>
        {location.pathname !== '/register' && (
          <button className="btn-outlined">
            <Link to="register">Crear Cuenta</Link>
          </button>
        )}
        {location.pathname !== '/login' && (
          <button className="btn-outlined">
            <Link to="login">Iniciar sesión</Link>
          </button>
        )}
      </section>
      <div className={styles.hamburger} onClick={onClickHamburger}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
}

export default Navbar;
