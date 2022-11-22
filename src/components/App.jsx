import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute, PublicRoute } from './Routes/Routes';
import { Global } from 'styles/global';
import { useEffect, useRef } from 'react';
import operations from 'Redux/Auth/auth.service';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector } from 'Redux/Selectors/authSelectors';
import { lazy } from 'react';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { themeSelector } from 'Redux/Selectors/authSelectors';

const HomePage = lazy(() => import('Pages/HomePage'));
const LoginPage = lazy(() => import('Pages/LoginPage'));
const RegistrationPage = lazy(() => import('Pages/RegistrationPage'));
const DiaryPage = lazy(() => import('Pages/DiaryPage'));
const CalculatorPage = lazy(() => import('Pages/CalculatorPage'));

export const App = () => {
  const colorTheme = useSelector(themeSelector);

  const { sid } = useSelector(authSelector);
  const { isLoading } = useSelector(authSelector);
  const dispach = useDispatch();
  const isFirstRefresh = useRef(true);

  useEffect(() => {
    const foo = document.querySelectorAll('#root');
    if (colorTheme === true) {
      foo[0].classList.add('darkTheme');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFirstRefresh.current) {
      isFirstRefresh.current = false;
      return;
    }

    if (isLoading) {
      dispach(operations.fetchCurrentUser({ sid: sid }));
    }
  }, [dispach, isLoading, sid]);

  return (
    <Suspense fallback={<Loader />}>
      <Global />
      <Routes>
        <Route path="/" element={<Layout colorTheme={colorTheme} />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage colorTheme={colorTheme} />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path="/diary"
            element={
              <PrivateRoute>
                <CalculatorPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/calculator"
            element={
              <PrivateRoute>
                <DiaryPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
