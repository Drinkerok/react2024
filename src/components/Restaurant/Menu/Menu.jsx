import { Counter } from '../../Counter/Counter';
import styles from './styles.module.css';

export const Menu = ({ items }) => {
  return (
    <div className={styles.menu}>
      <h2 className={styles.title}>Меню ресторана</h2>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item.id} className={styles.item}>
            {item.name} ({ item.ingredients.join(', ') })
            <Counter />
          </li>
        ))}
      </ul>
    </div>
  )
}