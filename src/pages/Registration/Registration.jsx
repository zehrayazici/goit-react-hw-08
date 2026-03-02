import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './Registration.module.css';

const Registration = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>REGISTER</h2>
      <RegistrationForm />
    </div>
  );
};

export default Registration;
