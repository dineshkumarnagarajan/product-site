import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import './theme/CommonStyles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import history from "./utils/history";
import ScrollToTop from "./utils/scrollToTop";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

sessionStorage.setItem(
  "app_running",
  `${process.env.REACT_APP_NAME}_${process.env.REACT_APP_VERSION}_${process.env.NODE_ENV}`
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter history={history}>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
