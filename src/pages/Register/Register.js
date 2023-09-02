import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { register } from 'Redux/Auth/actions';
import css from './Register.module.css';

export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={css.container}>
      <label>Enter your name</label>

      <input
        autocomplete="off"
        className={css.inputs}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="name"
      />
      <label>Enter your email</label>
      <input
        autocomplete="off"
        className={css.inputs}
        type="email"
        name="email"
        placeholder="email"
        required
      ></input>

      <label>Enter your password</label>
      <input
        autocomplete="off"
        placeholder="password"
        className={css.inputs}
        type="password"
        name="password"
        required
      />

      <Button style={{ padding: '5px 10px' }} type="submit">
        Register
      </Button>
    </form>
  );
}
