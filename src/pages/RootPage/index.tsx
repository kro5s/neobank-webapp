import QuickActions from "../../components/QuickActions";
import TelegramProfile from "../../components/TelegramProfile";
import styles from "./RootPage.module.css";
import ExchangeRate from "../../components/ExchangeRate";

function RootPage() {
  return (
    <div className={styles.container}>
      <TelegramProfile />
      <div><QuickActions /></div>
      <div><ExchangeRate /></div>
    </div>
  );
}

export default RootPage;
