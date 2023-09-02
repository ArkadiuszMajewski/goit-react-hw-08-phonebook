import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className={css.container}>
      {isLoggedIn ? (
        <p>
          <span>{user.name}, to see the list of contacts click here - </span>
          <Link className={css.link} to="/contacts">
            contacts
          </Link>
        </p>
      ) : (
        <p>
          <span>hello, plase </span>
          <Link to="/login" className={css.link}>
            login
          </Link>
          <span> or </span>
          <Link className={css.link} to="/register">
            <span>register</span>
          </Link>
          <span> new phonebook list</span>
        </p>
      )}
    </div>
  );
}
