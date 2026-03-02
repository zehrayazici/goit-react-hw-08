import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !number.trim()) return;
    dispatch(addContact({ name: name.trim(), number: number.trim() }));
    setName('');
    setNumber('');
  };
  
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">Name</label>
        <input className={styles.input} id="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Zehra Yazıcı" required />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="number">Number</label>
        <input className={styles.input} id="number" type="tel" value={number} onChange={e => setNumber(e.target.value)} placeholder="+0000000000" required />
      </div>
      <button className={styles.button} type="submit"><span>+</span> Add Contact</button>
    </form>
  );
};

export default ContactForm;
