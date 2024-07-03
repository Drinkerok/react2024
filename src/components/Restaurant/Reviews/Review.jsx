import styles from './review.module.css';

const getStars = (rating) => {
  const tempArr = [];

  for (let i = 0; i < 5; i++) {
    tempArr.push(<li key={i}>{ i < rating ? '★' : '☆' }</li>)
  }

  return tempArr;
}

export const Review = ({ review }) => {
  return (
    <div className={styles.review}>
      <p className={styles.author}>{ review.user }</p>
      <p className={styles.text}>{ review.text }</p>
      <ul className={styles.stars}>
        { getStars(review.rating) }
      </ul>
    </div>
  )
}