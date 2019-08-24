// external modules
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import "../assets/stylesheets/application.scss";
import App from "./components/app";

// Reducers
import flatsReducer from "./reducers/flats_reducer";
import selectedFlatReducer from "./reducers/selected_flat_reducer";

const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer
});

const middlewares = applyMiddleware(logger, reduxPromise);

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>, root
);
