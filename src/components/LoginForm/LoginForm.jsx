import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Min 6 characters').required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">Email</label>
          <Field className={styles.input} id="email" name="email" type="email" placeholder="you@example.com" />
          <ErrorMessage name="email" component="span" className={styles.error} />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">Password</label>
          <Field className={styles.input} id="password" name="password" type="password" placeholder="••••••" autoComplete="current-password"/>
          <ErrorMessage name="password" component="span" className={styles.error} />
        </div>
        <button className={styles.button} type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
