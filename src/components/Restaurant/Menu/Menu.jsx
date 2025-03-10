import { Counter } from '../../Counter/Counter';
import styles from './styles.module.scss';

export const Menu = ({ items }) => {
  return (
    <div className={styles.menu}>
      <h2 className={styles.title}>Меню ресторана</h2>

      {
        items.length === 0
          ? <p>Нет меню</p>
          : <ul className={styles.list}>
            {items.map(item => (
              <li key={item.id} className={styles.item}>
                {item.name} ({item.ingredients.join(', ')})
                <Counter />
              </li>
            ))}
          </ul>
      }
    </div>
  )
}