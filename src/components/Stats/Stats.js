import { useSelector } from 'react-redux';
import styles from './Stats.module.css';
import { getTotalTodoCount, getCompletedTodoCount } from '../TodoList/todos-selector';

export default function Stats() {
  const total = useSelector(getTotalTodoCount);
  const completed = useSelector(getCompletedTodoCount);

  return (
    <div className={styles.container}>
      <p className={styles.item}>
        <span className={styles.value}>{total}</span>
        <span className={styles.label}>Total</span>
      </p>
      <p className={styles.item}>
        <span className={styles.value}>{completed}</span>
        <span className={styles.label}>Completed</span>
      </p>
    </div>
  );
}