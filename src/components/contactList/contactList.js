import { Button } from 'components/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/actions';
import { selectStatusFilter, selectTasks } from 'Redux/selectors';
import css from './contactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectTasks);
  const filter = useSelector(selectStatusFilter).toLowerCase();
  const dataNormalize = filter.toLowerCase();

  const normalizedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(dataNormalize)
  );

  const dispatch = useDispatch();
  return (
    <div>
      <ul className={css.contactList}>
        {normalizedContacts.map(contact => (
          <li key={contact.id} className={css.contactListItem}>
            <div className={css.contactStyle}>
              <span className={css.contactListName}>{contact.name}</span>
              <span className={css.contactListNumber}>: {contact.number}</span>
            </div>
            <Button onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
