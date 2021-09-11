import { createSelector } from '@reduxjs/toolkit';
import {IItem, IFilter} from '../../interfaces'

export const allTodos =  (state: any) => state.todo.items;
export const getFilter =  (state: any ) => state.todo.filter;

export const getTotalTodoCount = (state: number) => {
  const todos = allTodos(state);
  return todos.length - 1;
};
export const getCompletedTodoCount = createSelector([allTodos], todos => {
  return todos.reduce((total: number, todo: IItem) => (todo.completed ? total + 1 : total), 0);
});

export const getVisibleTodos = createSelector(
  [allTodos, getFilter],
  (todos, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return filter
      ? todos.filter(
          ({ todo, completed }: IItem) =>
            todo && todo.toLowerCase().includes(normalizedFilter) && completed,
        )
      : todos;
  },
);
