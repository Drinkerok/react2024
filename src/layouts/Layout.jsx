import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import styles from './styles.module.css';

export const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <div class='container'>{ children }</div>
    <Footer />
  </div>
);