import {useTelegram} from "../../hooks/useTelegram.ts";
import styles from './TelegramProfile.module.css';
import profile from "../../assets/icons/profile.svg";

function TelegramProfile() {
  const { tg } = useTelegram();

  return (
    <div className={styles.container}>
      <img src={profile} alt="Профиль"/>
      <div className={styles.info}>
        <span className={styles.name}>{tg.initDataUnsafe.user?.first_name} {tg.initDataUnsafe.user?.last_name}</span>
        <span className={styles.tgId}>Telegram ID: {tg.initDataUnsafe.user?.id}</span>
      </div>
    </div>
  );
}

export default TelegramProfile;
