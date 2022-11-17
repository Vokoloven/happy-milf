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

export const App = () => {
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
                <DiaryPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/calculator"
            element={
              <PrivateRoute>
                <CalculatorPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
