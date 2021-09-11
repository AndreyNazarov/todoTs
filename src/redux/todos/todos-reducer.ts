import { createReducer, combineReducers, Dispatch } from '@reduxjs/toolkit';
import * as action from './todos-actions';
import {IItem} from '../../interfaces'

const todoReducer = createReducer([], {
  [action.getAllTodoSuccess.type]: (_, action: any) => {
    
    return action.payload.map((item: IItem) => {
      return {
        ...item,
        completed: false,
      };
    });
  },
  [action.addTodoSuccess.type]: (state: IItem[], { payload }: any) => [...state, payload],
  [action.deleteTodoSuccess.type]: (state: IItem[], { payload }: any) =>
    state.filter((item: IItem) => item.id !== payload.id),
  [action.editTodoSuccess.type]: (state: IItem[], { payload }) =>
    state.map((item: IItem) => (item.id === payload.id ? payload : item)),
  [action.toggleCompleted.type]: (state: IItem[], { payload }) => {
    return state.map((item) => {
      if(item.id === payload){
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    })
  },
});

const loaderReducer = createReducer(false, {
  [action.getAllTodoRequest.type]: () => true,
  [action.getAllTodoSuccess.type]: () => false,
  [action.getAllTodoError.type]: () => false,
  [action.addTodoRequest.type]: () => true,
  [action.addTodoSuccess.type]: () => false,
  [action.addTodoError.type]: () => false,
  [action.deleteTodoRequest.type]: () => true,
  [action.deleteTodoSuccess.type]: () => false,
  [action.deleteTodoError.type]: () => false,
  [action.editTodoRequest.type]: () => true,
  [action.editTodoSuccess.type]: () => false,
  [action.editTodoError.type]: () => false,
});

const filter = createReducer('', {
  [action.changeFilter.type]: (_, { payload }) => payload,
});

const errorReducer = createReducer(null, {
  [action.getAllTodoError.type]: (_, { payload }) => payload,
  [action.addTodoError.type]: (_, { payload }) => payload,
  [action.deleteTodoError.type]: (_, { payload }) => payload,
  [action.editTodoError.type]: (_, { payload }) => payload,
});



const todoRootReducer = combineReducers({
  items: todoReducer,
  filter,
  loader: loaderReducer,
  error: errorReducer,
});

export { todoRootReducer };
