import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>LOG IN</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
