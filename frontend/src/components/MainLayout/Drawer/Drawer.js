import { Link, useLocation } from 'react-router-dom';

import Social from '../Social/Social';

import styles from './Drawer.module.css';

function Drawer({ toogleDrawer }) {
  const location = useLocation();

  const onClickLink = () => {
    toogleDrawer();
  };

  const onClose = () => {
    toogleDrawer();
  };

  return (
    <nav className={styles.drawer}>
      <section className={styles.drawer_header}>
        <p className={styles.close} onClick={onClose}>
          x
        </p>
        <h2>MENÚ</h2>
      </section>
      <section className={styles.nav_menu}>
        {location.pathname !== '/register' && (
          <Link to="/register" onClick={onClickLink}>
            <h3>Crear cuenta</h3>
          </Link>
        )}

        {location.pathname !== '/login' && (
          <Link to="/login" onClick={onClickLink}>
            <h3>Iniciar sesión</h3>
          </Link>
        )}
        {/* To-Do implement User context and logout */}
        {/* <div className={styles.logout}>
          <p className="small-text">
            ¿Deseas{' '}
            <a href="#">
              <span onClick={onClickLink}>cerrar sesión</span>
            </a>
            ?
          </p>
        </div> */}
      </section>
      <section className={styles.social}>
        <Social />
      </section>
    </nav>
  );
}

export default Drawer;
