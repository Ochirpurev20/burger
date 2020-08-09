import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'

import orderReducer from './redux/reducer/orderReducer';
import burgerReducer from "./redux/reducer/burgerReducer";
import signupLoginReducer from './redux/reducer/signupLoginReducer'

const loggerMiddle = store => {
  return next => {
    return action => {
      // console.log('middleware logger: Dispatching ==== ', action)
      // console.log('middleware state: ', store.getState())
      const result = next(action);
      // console.log('middleware state AFTER: ', store.getState())
    
      return result;
    }
  }
}

const reducers = combineReducers({
   burgerReducer,
   orderReducer,
   signupLoginReducer
})

const middlewares = [loggerMiddle, thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
