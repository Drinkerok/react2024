import { useReducer } from 'react'
import { Rating } from './../../Rating/Rating'
import styles from './review-form.module.css'

const reducerForm = (state, action) => {
  if (action.type === 'change-rating') {
    return {
      ...state,
      rating: action.payload.rating,
    }
  }
  if (action.type === 'change-name') {
    return {
      ...state,
      name: action.payload.name,
    }
  }
  if (action.type === 'change-description') {
    return {
      ...state,
      description: action.payload.description,
    }
  }
  return state
}

export const ReviewForm = () => {
  const [form, dispatchForm] = useReducer(reducerForm, { rating: 5, name: '', description: '' })

  return (
    <form action="#" className={styles.reviewForm}>
      <p className={styles.reviewFormHeader}>Добавить отзыв</p>
      <div className={styles.reviewFormItemWrapper}>
        Оценка:
        <Rating
          rating={form.rating}
          changeRating={(newRating) => dispatchForm({ type: 'change-rating', payload: { rating: newRating }})}
        />
      </div>

      <div className={styles.reviewFormItemWrapper}>
        Ваше имя:
        <input
          name="review-name"
          type="text"
          value={form.name}
          onInput={(evt) => dispatchForm({ type: 'change-name', payload: { name: evt.target.value }})}
        />
      </div>
      <div className={styles.reviewFormItemWrapper}>
        Описание:
        <textarea
          name="review-description"
          value={form.description}
          onInput={(evt) => dispatchForm({ type: 'change-description', payload: { description: evt.target.value }})}
        ></textarea>
      </div>
      <button className={styles.reviewFormSubmit}>Добавить</button>
    </form>
  )
}