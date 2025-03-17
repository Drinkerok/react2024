import classnames from "classnames";
import styles from './rating.module.css';

const MAX_RATING = 5

const getStars = (rating, max, options) => {
  const tempArr = [];

  for (let i = 0; i < max; i++) {
    const value = i < rating ? '★' : '☆'
    tempArr.push(
      <li key={i}>
        { options.changeRating
          ? <button
              type="button"
              className={styles.ratingButton}
              onClick={() => options.changeRating(i + 1)}
            >{ value }</button>
          : value
        }
      </li>
    )
  }

  return tempArr;
}

export const Rating = ({ rating, max = MAX_RATING, changeRating = null, className }) => {
  return (
    <ul className={classnames(styles.ratingList, className)}>
      { getStars(rating, max, { changeRating }) }
    </ul>
  )
}