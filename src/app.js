import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllItem } from './redux/todos/todos-operation';
import { Spinner } from './components/Spinner';
import { isLoadingValue } from './components/Spinner';
import { ToDoList } from './components/TodoList';
import { ToDoCreateForm } from './components/TodoCreateForm';
import Filter from './components/Filter/Filter';
import Stats from './components/Stats/Stats';
export default function App() {
  let isLoading = useSelector(isLoadingValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItem());
  }, []);

  return (
    <>
    <Filter />
    <Stats />
      <ToDoCreateForm />
      <ToDoList />
      {isLoading && <Spinner />}
    </>
  );
}
