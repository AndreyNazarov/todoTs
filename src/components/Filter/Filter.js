import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../TodoList/todos-selector';
import { changeFilter } from '../../redux/todos/todos-actions';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  return (
    <div className={styles.filter}>
      <p className={styles.label}>Filter <span className={styles.span}>But only completed todos!</span></p>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}