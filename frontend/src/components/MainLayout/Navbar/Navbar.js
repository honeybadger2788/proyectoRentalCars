import { Link, useLocation } from 'react-router-dom';

import User from '../User/User';

import { useAuthContext } from '../../../hooks/useAuthContext';

import styles from './Navbar.module.css';

function Navbar({ hidden, toogleDrawer }) {
  const { user } = useAuthContext();
  let location = useLocation();

  const onClickHamburger = () => {
    toogleDrawer();
  };

  const isAdmin =
    user &&
    user.hasOwnProperty('authorities') &&
    user.authorities[0].authority === 'ROLE_ADMIN'
      ? true
      : false;

  return (
    <nav className={`${styles.navbar} ${hidden && styles.navbar_hidden}`}>
      <Link to="/">
        <div className={styles.logo_container}>
          <img
            alt="logo"
            className={styles.logo_image}
            src="https://grupo2-frontend-images.s3.us-east-2.amazonaws.com/images/logo-1.svg"
          />
          <p className={styles.logo_text}>Sentite como en tu hogar</p>
        </div>
      </Link>
      {!user ? (
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
      ) : (
        <section className={styles.nav_menu}>
          {isAdmin ? 
            <div className={styles.adminContainer}>
              <Link to="admin">Administración</Link>
              <span>|</span>
            </div>
          : <div className={styles.adminContainer}>
          <Link to={`${user.id}/bookings`}>Mis reservas</Link>
          <span>|</span>
        </div>}
          <User user={user} />
        </section>
      )}
      <div className={styles.hamburger} onClick={onClickHamburger}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
}

export default Navbar;
