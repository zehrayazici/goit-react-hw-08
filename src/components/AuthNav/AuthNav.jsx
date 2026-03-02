import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink to="/register" className={({ isActive }) => isActive ? styles.active : styles.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={({ isActive }) => isActive ? styles.active : styles.btnLink}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
