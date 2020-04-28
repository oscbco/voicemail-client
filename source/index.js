import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider as ReduxProvider } from 'react-redux';
import { fromJS } from 'immutable';

import App from './components/App/App';
import configureStore from './redux/configureStore';

const store = configureStore(fromJS({}));

const AppRender = () => {
  render(
    <AppContainer>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </AppContainer>,
    document.getElementById('root')
  );
};

/* eslint no-process-env: "off" */
// Wait 0.6 seconds before mounting React in development,
// to allow vs code debugger to connect
console.dir(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  setTimeout(AppRender, 600);
} else {
  AppRender();
}

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    const NextApp = require('./components/App/App').default;
    render(
      <AppContainer>
        <ReduxProvider store={store}>
          <NextApp />
        </ReduxProvider>
      </AppContainer>,
      document.getElementById('root'));
  });
}
