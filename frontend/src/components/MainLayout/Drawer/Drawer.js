import { Link, useLocation } from 'react-router-dom';

import { useAuthContext } from '../../../hooks/useAuthContext';
import { useLogout } from '../../../hooks/useLogout';

import Social from '../Social/Social';
import User from '../User/User';
import styles from './Drawer.module.css';

function Drawer({ toogleDrawer }) {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const location = useLocation();

  const isAdmin =
    user &&
    user.hasOwnProperty('authorities') &&
    user.authorities[0].authority === 'ROLE_ADMIN'
      ? true
      : false;

  const onClickLink = () => {
    toogleDrawer();
  };

  const onClose = () => {
    toogleDrawer();
  };

  const onClickLogout = () => {
    logout();
    onClose();
  };

  return (
    <nav className={styles.drawer}>
      <section className={styles.drawer_header}>
        <p className={styles.close} onClick={onClose}>
          x
        </p>
        {!user ? <h2>MENÚ</h2> : <User user={user} />}
      </section>
      <section className={styles.nav_menu}>
        {!user && location.pathname !== '/register' && (
          <Link to="/register" onClick={onClickLink}>
            <h3>Crear cuenta</h3>
          </Link>
        )}
        {!user && location.pathname !== '/login' && (
          <Link to="/login" onClick={onClickLink}>
            <h3>Iniciar sesión</h3>
          </Link>
        )}
        {user && (
          <div>
            {isAdmin? 
              <div className={styles.adminContainer}>
                <Link to="/admin" onClick={onClickLink}>
                  Administración
                </Link>
              </div>
              : <div className={styles.adminContainer}>
                <Link to={`${user.id}/bookings`} onClick={onClickLink}>
                  Mis reservas
                </Link>
                </div>
            }
            <div className={styles.logout}>
              <p className="small-text">
                ¿Deseas{' '}
                <a href="/">
                  <span onClick={onClickLogout}>cerrar sesión</span>
                </a>
                ?
              </p>
            </div>
          </div>
        )}
      </section>
      <section className={styles.social}>
        <Social />
      </section>
    </nav>
  );
}

export default Drawer;
