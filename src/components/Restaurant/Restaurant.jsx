import { Menu } from "./Menu/Menu";
import { Reviews } from "./Reviews/Reviews";
import styles from './styles.module.css';

export const Restaurant = ({ restaurant }) => {
  console.log(restaurant)
  return (
    <div className={styles.restaurant}>
      <h1 className={styles.title}>{ restaurant.name }</h1>
      <Menu items={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  )
}