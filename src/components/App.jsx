import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'Pages/HomePage';
import { LoginPage } from 'Pages/LoginPage';
import { RegistrationPage } from 'Pages/RegistrationPage';
import { DiaryPage } from 'Pages/DiaryPage';
import { CalculatorPage } from 'Pages/CalculatorPage';
import { PrivateRoute, PublicRoute } from './Routes/Routes';
import { Global } from 'styles/global';
import { useEffect, useRef } from 'react';
import operations from 'Redux/Auth/auth.service';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector } from 'Redux/Selectors/authSelectors';

export const App = () => {
  const { sid } = useSelector(authSelector);
  const { isLoading } = useSelector(authSelector);
  const dispach = useDispatch();
  const isFirstRefresh = useRef(true);

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
    <>
      <Global />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
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
    </>
  );
};
