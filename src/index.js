import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ListReducer from "./redux/LIstReducers";
import ShoppingListContainer from "./components/ShoppingListContainer";
import logger from 'redux-logger';

const store = createStore(ListReducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><ShoppingListContainer/></Provider>, document.getElementById('root'));

