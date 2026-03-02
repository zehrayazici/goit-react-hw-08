import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <div className={styles.avatar}>{contact.name[0].toUpperCase()}</div>
      <div className={styles.info}>
        <span className={styles.name}>{contact.name}</span>
        <span className={styles.number}>{contact.number}</span>
      </div>
      <button className={styles.deleteBtn} onClick={() => dispatch(deleteContact(contact.id))} aria-label="Delete contact">
        🗑️
      </button>
    </li>
  );
};

export default Contact;
