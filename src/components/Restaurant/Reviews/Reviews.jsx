import { Review } from "./Review";
import styles from './reviews.module.css';
import classnames from "classnames";

export const Reviews = ({ reviews, className }) => {
  return (
    <div className={classnames(styles.reviews, className)}>
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