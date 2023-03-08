// import thunk from "redux-thunk";
// import { createStore, compose, applyMiddleware } from "redux";
// import reducer from "./reducers/index";
// const middleware = applyMiddleware(thunk);
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, composeEnhancer(middleware));
// export default store;



import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import reducer from './reducers/index';
const composeEnhancer =  (JSON.parse(process.env.REACT_APP_SHOW_REDUX_DEV_TOOLS) &&
typeof window !== 'undefined' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
compose;

const persistConfig = {
  key: `${process.env.REACT_APP_NAME}_${process.env.REACT_APP_VERSION}_${process.env.NODE_ENV}_persist_store`,
  storage: storage,
  whitelist: ["themeType"], // which reducer want to store
};
const pReducer = persistReducer(persistConfig, reducer);
const middleware = applyMiddleware(thunk);
const store = createStore(pReducer, composeEnhancer(middleware));
const persistor = persistStore(store);
export { persistor, store };
