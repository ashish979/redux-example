import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ListReducer from "./redux/LIstReducers";
import ShoppingListContainer from "./components/ShoppingListContainer";

const store = createStore(ListReducer);

ReactDOM.render(<Provider store={store}><ShoppingListContainer/></Provider>, document.getElementById('root'));

