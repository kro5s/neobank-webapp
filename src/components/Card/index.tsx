import styles from './Card.module.css';
import type {CardProps} from "./types.ts";
import {Link} from "react-router-dom";
import {prepareStatus} from "../../helpers/prepareStatus";

const formatter = new Intl.NumberFormat("ru")

function Card({title, subtitle, total, meta, status, dateInfo, detailsHref}: CardProps) {
  return (
    <Link to={detailsHref} className={styles.card}>
      <div className="title">{title}</div>
      {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      <div className={styles.total}>{formatter.format(total)}₽</div>
      {meta}
      <div className={styles.bottom}>
        {prepareStatus(status)}
        <span className={styles.dateInfo}>{dateInfo}</span>
      </div>

      <div className={styles.details}>Детали &gt;</div>
    </Link>
  );
}

export default Card;
