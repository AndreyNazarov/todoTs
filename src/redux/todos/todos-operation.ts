import * as action from './todos-actions';
import {
  fetchGetTodo,
  fetchAddItem,
  fetchDeleteItem,
  fetchEditItem,
  
} from '../../service/fetchApi';
import {Dispatch } from '@reduxjs/toolkit';
import {IItem, ITodoState, IState} from '../../interfaces'

export const getAllItem = () => async (dispatch: Dispatch) => {
  dispatch(action.getAllTodoRequest());
  try {
    const response = await fetchGetTodo();
    const { data } = response.data;
    dispatch(action.getAllTodoSuccess(data));
  } catch (error) {
    dispatch(action.getAllTodoError(error));
  }
};

export const addItem = (item: string) => async (dispatch: Dispatch) => {
  console.log("teeeest", typeof dispatch, item);
  
  dispatch(action.addTodoRequest());
  try {
    const { data } = await fetchAddItem(item);
    data["completed"] = false;
    dispatch(action.addTodoSuccess(data));
  } catch (error) {
    dispatch(action.addTodoError(error));
  }
};

export const deleteItem = (item: IItem) => async (dispatch: Dispatch) => {
  dispatch(action.deleteTodoRequest());
  try {
    const response = await fetchDeleteItem(item);
    dispatch(action.deleteTodoSuccess(item));
  } catch (error) {
    dispatch(action.deleteTodoError(error));
  }
};

export const editItem = (item: IItem) => async (dispatch: Dispatch) => {
  const { todo, id } = item;
  const update = {
    todo,
    id,
  };
  dispatch(action.editTodoRequest());
  try {
    const response = await fetchEditItem(id, update);
    const { data } = response;
    dispatch(action.editTodoSuccess(data));
  } catch (error) {
    dispatch(action.editTodoError(error));
  }
};
