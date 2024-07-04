import { Review } from "./Review";
import styles from './reviews.module.css';

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <h2 className={styles.title}>Отзывы</h2>
      {
        reviews.length === 0
          ? <p>Нет отзывов</p>
          : <ul className={styles.list}>
            {reviews.map(review => (
              <li key={review.id} className={styles.item}>
                <Review review={review} />
              </li>
            ))}
          </ul>
      }
    </div>
  )
}