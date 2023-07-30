import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.wrapper}>
      <div className={css['header-container']}>
        <header className={css.header}>
          <NavLink to="/" className={css['nav-link']}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css['nav-link']}>
            Movies
          </NavLink>
        </header>
      </div>
      <main className={css['main-container']}>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
