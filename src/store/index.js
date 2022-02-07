import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import { makeRootReducer } from './reducer';
import rootSaga from './saga';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: makeRootReducer(history),
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [
    routerMiddleware(history),
    sagaMiddleware,
  ],
});

// extension methods for store
store.asyncReducers = {};
store.injectReducer = (key, asyncReducer) => {
  store.asyncReducers[key] = asyncReducer;
  store.replaceReducer(makeRootReducer(history, store.asyncReducers));
};

const createSagaInjector = (runSaga, rootSaga) => {
  // Create a dictionary to keep track of injected sagas
  const mapSaga = new Map();

  const injectSaga = (key, saga) => {
    if (mapSaga.has(key)) return;
    const task = runSaga(saga);
    // Save the task if we want to cancel it in the future
    mapSaga.set(key, task);
  };

  // Inject the root saga as it a staticlly loaded file,
  injectSaga(runSaga, rootSaga);

  return injectSaga;
};
store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga);

export default store;
