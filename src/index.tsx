import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header/Header';
import * as serviceWorker from './serviceWorker';
//import HelloClass from "./components/HelloClass";
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import HelloClass from './containers/Hello';
import { Provider } from 'react-redux';


const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel : 1,
  languageName: "TypeScript",
});

ReactDOM.render(
  <Provider store={store}>
    <Header></Header>
    <HelloClass></HelloClass>
  </Provider>
    ,
    document.getElementById('root') as HTMLElement
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
