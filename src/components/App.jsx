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
import { getUserInfoApiService } from 'Redux/UserInfo/userInfo.service';
import { postDaySelector } from 'Redux/Selectors/postDaySelectors';

export const App = () => {
  const { sid } = useSelector(authSelector);
  const { isLoading } = useSelector(authSelector);
  const dispach = useDispatch();
  const isFirstRefresh = useRef(true);
  const { isCompletedRefreshing } = useSelector(authSelector);
  const { isAddedProductInList, isDeletedProductInList } =
    useSelector(postDaySelector);

  useEffect(() => {
    if (isFirstRefresh.current) {
      isFirstRefresh.current = false;
      return;
    }

    if (isLoading) {
      dispach(operations.fetchCurrentUser({ sid: sid }));
    }
  }, [dispach, isLoading, sid]);

  useEffect(() => {
    isCompletedRefreshing && dispach(getUserInfoApiService());
  }, [
    dispach,
    isCompletedRefreshing,
    isAddedProductInList,
    isDeletedProductInList,
  ]);

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
