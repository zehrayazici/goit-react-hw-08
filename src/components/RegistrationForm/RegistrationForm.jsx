import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Min 2 characters').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Min 6 characters').required('Required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', email: '', password: '' }} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">Name</label>
          <Field className={styles.input} id="name" name="name" type="text" placeholder="Your name" />
          <ErrorMessage name="name" component="span" className={styles.error} />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">Email</label>
          <Field className={styles.input} id="email" name="email" type="email" placeholder="you@example.com" />
          <ErrorMessage name="email" component="span" className={styles.error} />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">Password</label>
          <Field className={styles.input} id="password" name="password" type="password" placeholder="••••••" autoComplete="new-password"/>
          <ErrorMessage name="password" component="span" className={styles.error} />
        </div>
        <button className={styles.button} type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
