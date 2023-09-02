import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/Auth/actions';
import css from './Login.module.css';
import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  console.log(user);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return user.email === null ? (
    <form className={css.container} onSubmit={handleSubmit}>
      <p>login please</p>
      <label>enter your email</label>
      <input
        autoComplete="username"
        className={css.inputs}
        type="email"
        name="email"
        placeholder="email"
        required
      ></input>
      <label>enter your password</label>
      <input
        autoComplete="current-password"
        className={css.inputs}
        type="password"
        name="password"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="password"
      ></input>
      <Button style={{ padding: '5px 10px' }} type="submit">
        Login
      </Button>
    </form>
  ) : (
    <div className={css.logedIn}>
      <p>you alredy logged in</p>
      <p>to see contact list click here</p>
      <Link className={css.link} to="/contacts">
        contacts
      </Link>
    </div>
  );
}
