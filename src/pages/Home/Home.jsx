import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Contact Book</h1>
      <p className={styles.text}>Welcome to the Contact Book!</p>
      <p className={styles.text}>
        Your personal hub to manage contacts efficiently and securely. Never
        lose a number again.
      </p>
      <p className={styles.text}>
        Please{" "}
        <Link to="/register" className={styles.link}>Register</Link>{" "}
        or{" "}
        <Link to="/login" className={styles.link}>Login</Link>{" "}
        to manage your contacts!
      </p>
    </div>
  );
};

export default Home;