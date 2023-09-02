import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'Redux/Auth/actions';
import { PrivateRoute } from './PrivateRoute';

const Navigation = lazy(() => import('./Navigation/Navigation'));
const Home = lazy(() => import('pages/Home/Home'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const Login = lazy(() => import('pages/Login/Login'));
const Phonebook = lazy(() => import('pages/Phonebook/Phonebook'));
const Register = lazy(() => import('pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  // console.log(dispatch);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PrivateRoute redirectTo="/contacts" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <PrivateRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Phonebook />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
