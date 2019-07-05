import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga.js'; 
import todos from './reducer/reducer';
import Con1 from './components/con1/con1';
import Con2 from './components/con2/con2';
import Con3 from './components/con3/con3';
import SagaTest from './components/saga/saga'
import './App.css';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(todos, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(mySaga);

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Con3/>
        <Con1/>
        <Con2/>
        <SagaTest/>
      </div>
    </Provider>
  );
}

export default App;
