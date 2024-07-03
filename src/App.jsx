import React from "react";
import { RestaurantsPage } from "./pages/RestaurantsPage/RestaurantsPage";
import { restaurants } from './_data/fixtures';
import './css/base.css';

export const App = () => {
  return <RestaurantsPage restaurants={restaurants} />
}