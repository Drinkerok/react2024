import { Menu } from "./Menu/Menu";
import { Reviews } from "./Reviews/Reviews";
import { ReviewForm } from "./Reviews/ReviewForm";
import styles from './styles.module.css';

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.restaurant}>
      <h1 className={styles.title}>{restaurant.name}</h1>
      {restaurant.menu && <Menu items={restaurant.menu} />}
      {restaurant.reviews && <Reviews reviews={restaurant.reviews} />}
      <ReviewForm />
    </div>
  )
}