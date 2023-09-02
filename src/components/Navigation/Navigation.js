import { useAuth } from 'hooks/useAuth';
import { lazy, Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Navigation.module.css';

const UserMenu = lazy(() => import('components/Usermenu/Usermenu'));

export default function Navigation() {
  const { isLoggedIn } = useAuth();
  const navLink = ({ isActive }) => (isActive ? css['active'] : css['navLink']);

  return (
    <>
      <header className={css.header}>
        <nav>
          <NavLink className={navLink} to="/" end>
            HOME
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink className={navLink} to="/contacts" end>
                PHONEBOOK
              </NavLink>
              <UserMenu />
            </>
          ) : (
            <>
              <NavLink className={navLink} to="/register" end>
                REGISTER
              </NavLink>
              <NavLink className={navLink} to="/login" end>
                LOGIN
              </NavLink>
            </>
          )}
        </nav>
      </header>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
