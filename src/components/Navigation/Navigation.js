import { useAuth } from 'hooks';
import { lazy, Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './Navigation.module.css';

const UserMenu = lazy(() => import('components/Usermenu/Usermenu'));

export default function Navigation() {
  const StyledLink = styled(NavLink)`
    &.active {
      color: rgb(112, 27, 27);
    }
  `;
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className={css.header}>
        <nav>
          <StyledLink className={css.nav__link} to="/" end>
            HOME
          </StyledLink>
          {isLoggedIn ? (
            <>
              <StyledLink className={css.nav__link} to="/contacts" end>
                PHONEBOOK
              </StyledLink>
              <UserMenu />
            </>
          ) : (
            <>
              <StyledLink className={css.nav__link} to="/register" end>
                Register
              </StyledLink>
              <StyledLink className={css.nav__link} to="/login" end>
                Login
              </StyledLink>
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
