import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/Auth/actions';
import css from './Usermenu.module.css';
import { Button } from 'components/Button/Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <span className={css.position}>
      <span> {user.email} </span>
      <Button className={css.btnStyle} onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </span>
  );
}
