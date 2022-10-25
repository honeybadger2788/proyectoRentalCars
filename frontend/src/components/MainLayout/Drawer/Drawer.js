import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

import Social from '../Social/Social';
import User from '../User/User';
import styles from './Drawer.module.css';

function Drawer({ toogleDrawer }) {
  const [user, setUser] = useState({})
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const location = useLocation();

  const onClickLink = () => {
    toogleDrawer();
  };

  const onClose = () => {
    toogleDrawer();
  };

  const onClickLogout = () => {
    sessionStorage.clear()
    onClose()
  }

  useEffect(() => {
    if (sessionStorage.user && sessionStorage.userLoggedIn) {
      setUser(JSON.parse(sessionStorage.user))
      setUserLoggedIn(JSON.parse(sessionStorage.userLoggedIn))
    }
  },[])

  return (
    <nav className={styles.drawer}>
      <section className={styles.drawer_header}>
        <p className={styles.close} onClick={onClose}>
          x
        </p>
        { !userLoggedIn ? <h2>MENÚ</h2> : <User user={user}/>}
      </section>
      <section className={styles.nav_menu}>
        { !userLoggedIn && location.pathname !== '/register' && (
          <Link to="/register" onClick={onClickLink}>
            <h3>Crear cuenta</h3>
          </Link>
        )}
        { !userLoggedIn && location.pathname !== '/login' && (
          <Link to="/login" onClick={onClickLink}>
            <h3>Iniciar sesión</h3>
          </Link>
          )}
          { userLoggedIn && <div className={styles.logout}>
          <p className="small-text">
            ¿Deseas{' '}
            <a href="/">
              <span onClick={onClickLogout}>cerrar sesión</span>
            </a>
            ?
          </p>
          </div>}
      </section>
      <section className={styles.social}>
        <Social />
      </section>
    </nav>
  );
}

export default Drawer;
