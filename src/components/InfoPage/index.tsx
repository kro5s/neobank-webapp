import type {InfoPageProps} from "./types.ts";
import styles from './InfoPage.module.css';
import {useNavigate} from "react-router-dom";
import arrowLeft from '../../assets/icons/arrow-left.svg';
import clsx from "clsx";

function InfoPage({title, actions, map}: InfoPageProps) {
  const navigate = useNavigate();

  const handleReturn = () => navigate(-1);

  return (
    <>
      <h1 className={styles.title}>
        <button className={styles.return} onClick={handleReturn}>
          <img src={arrowLeft} alt="Вернуться назад"/>
        </button>
        {title}
      </h1>

      <div className={styles.map}>
        {Object.entries(map).map(([key, value]) => (
          <div key={key} className={styles.mapItem}>
            <span className={styles.mapKey}>{key}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>

      {
        actions && actions.length > 0 &&
        <div className={styles.actions}>
          {
            actions.map((action) => (
              <button
                key={action.title}
                className={clsx(styles.action, {
                  [styles.accent]: action.accent
                })}
                onClick={action.handler}
              >
                {action.title}
              </button>
            ))
          }
        </div>
      }
    </>
  );
}

export default InfoPage;
