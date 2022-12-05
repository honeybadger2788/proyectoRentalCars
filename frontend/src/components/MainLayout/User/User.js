import { useLogout } from '../../../hooks/useLogout';

import styles from './User.module.css';

export default function User({ user }) {
  const { logout } = useLogout();

  const onClickLogout = () => {
    logout();
  };

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <h2 className={styles.h2}>
          {user.firstName.slice(0, 1) + user.lastName.slice(0, 1)}
        </h2>
      </div>
      <h3 className={styles.h3}>
        Hola,{' '}
        <button className={styles.userBtn}>
          {user.firstName + ' ' + user.lastName}
        </button>
      </h3>
      <h3 className={styles.close} onClick={onClickLogout}>
        x
      </h3>
    </div>
  );
}
