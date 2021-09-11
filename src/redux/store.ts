import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { todoRootReducer } from './todos/todos-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    todo: todoRootReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export default store;
