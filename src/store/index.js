import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { configureStore } from '@reduxjs/toolkit';

// custom slices
import layoutReducer from './slices/layoutSlice';

export const history = createBrowserHistory();

const middleware = [
  routerMiddleware(history),
];

const store = configureStore({
  reducer: {
    router: connectRouter(history),
    layout: layoutReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
});

export default store;
