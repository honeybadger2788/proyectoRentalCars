import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Drawer from './Drawer/Drawer';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import styles from './MainLayout.module.css';

function MainLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toogleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.wrapper}>
      {/* Hidden navbar to add top margin dinamically */}
      <Navbar hidden />

      <Navbar toogleDrawer={toogleDrawer} />
      <section className={styles.content}>
        <Outlet />
      </section>
      <Footer />

      {drawerOpen && <Drawer toogleDrawer={toogleDrawer} />}
    </div>
  );
}

export default MainLayout;
