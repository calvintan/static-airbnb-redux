// external modules
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

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

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>, root
);
