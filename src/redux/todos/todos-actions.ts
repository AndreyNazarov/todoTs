import { createAction } from '@reduxjs/toolkit';

export const getAllTodoRequest = createAction<undefined>('todo/getAllRequest');
export const getAllTodoSuccess = createAction<string, string>('todo/getAllSuccess');
export const getAllTodoError = createAction<any>('todo/getAllError');

export const addTodoRequest = createAction<undefined>('todo/addItemRequest');
export const addTodoSuccess = createAction<string, string>('todo/addItemSuccess');
export const addTodoError = createAction<any>('todo/addItemError');

export const deleteTodoRequest = createAction<undefined>('todo/deleteItemRequest');
export const deleteTodoSuccess = createAction<string, string>('todo/deleteItemSuccess');
export const deleteTodoError = createAction<any>('todo/deleteItemError');

export const editTodoRequest = createAction<undefined>('todo/editItemRequest');
export const editTodoSuccess = createAction<string, string>('todo/editItemSuccess');
export const editTodoError = createAction<any>('todo/editItemError');

export const changeFilter = createAction<string, string>('todos/changeFilter');

export const toggleCompleted = createAction<string, string>('todo/toggleChange');
