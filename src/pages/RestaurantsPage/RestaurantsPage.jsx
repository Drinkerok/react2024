import { Layout } from "../../layouts/Layout";
import { Tabs } from "../../components/Tabs/Tabs";
import { Restaurant } from "../../components/Restaurant/Restaurant";

export const RestaurantsPage = ({restaurants}) => {
  return (
    <Layout>
      <Tabs />
      <Restaurant restaurant={restaurants[0]} />
    </Layout>
  )
}