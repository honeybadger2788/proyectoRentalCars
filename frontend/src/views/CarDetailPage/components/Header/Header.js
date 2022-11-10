import { useNavigate } from 'react-router-dom';

import styles from './Header.module.css';

function Header({ category, title }) {
  const navigate = useNavigate();

  function onClickBack() {
    navigate(-1);
  }
  return (
    <header className={styles.headerContainer}>
      <section>
        <h4>{category.title}</h4>
        <h1>{title}</h1>
      </section>
      <div className={styles.backButton} onClick={onClickBack}>
        <i className="fa-solid fa-chevron-left fa-xl"></i>
      </div>
    </header>
  );
}

export default Header;
