import { Rating } from './../../Rating/Rating'
import styles from './review.module.css';

export const Review = ({ review }) => {
  return (
    <div className={styles.review}>
      <p className={styles.author}>{ review.user }</p>
      <p className={styles.text}>{ review.text }</p>
      <Rating rating={review.rating} />
    </div>
  )
}