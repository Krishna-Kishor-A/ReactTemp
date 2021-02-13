import React,{ useContext, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
// import { AUTHENTICATION_SUCCESS } from 'context/actions';
import Login from './login/login';
import { Component } from 'react';
import { render } from 'react-dom';
import Main from '../protected/main/Main';
// import LoadingPage from './loadingPage/LoadingPage';
// import withAuthProvider from './AuthProvider';


const AppRoutes = (props) => {
  
  const { dispatch } = useContext(GlobalContext);
  const { isAuthenticated, isAuthenticating, login, logout, user, getAccessToken } = props;
  const isValidUser=false;
    return(
       isValidUser ? (
        <>
          <Route
            path="/"
            render={(props) => (
              <Main
                {...props}
                isAuthenticated={isAuthenticated}
                getAccessToken={getAccessToken}
                user={user}
                authLogout={logout}
              />
            )}
          />
        </>
      ) : (
          <>
            <Route
              exact
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  authLogin={login}
                />
              )}
            />
            <Redirect to={{ pathname: '/login' }} />
          </>
        )
      
    );
    
  
 
};

export default AppRoutes;


