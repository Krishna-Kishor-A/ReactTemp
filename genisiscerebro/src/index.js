import React from 'react';
import ReactDOM from 'react-dom';
import GlobalContextProvider from './context/GlobalContext';
import AppRoutes from './app/AppRoutes';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

const render = (Component) => ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>, rootElement
);

render(AppRoutes);

if (module.hot) {
  module.hot.accept('./app/AppRoutes', () => {
    const HotApp = require('./app/AppRoutes').default;
    render(HotApp);
  });
}
