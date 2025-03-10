import React from "react";
import { RestaurantsPage } from "./pages/RestaurantsPage/RestaurantsPage";
import { restaurants } from './_data/fixtures';
import './css/base.scss';
import './css/common.scss';

export const App = () => {
  return <RestaurantsPage restaurants={restaurants} />
}