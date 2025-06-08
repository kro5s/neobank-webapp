import type {DepositsListProps} from "./types.ts";
import Card from "../Card";
import styles from './DepositsList.module.css';

function DepositsList({ deposits }: DepositsListProps) {
  return (
    <div className={styles.list}>
      {
        deposits.map(({id, name, total, status, closing_date, opened_date, title, rate}) => (
          <Card
            key={id}
            title={name}
            subtitle={`Вклад №${title}`}
            total={total}
            meta={<div className={styles.rate}>Ставка <span className={styles.rateValue}>{rate}%</span></div>}
            status={status}
            detailsHref={`/deposits/${id}`}
            dateInfo={status === 'active' ? `до ${closing_date}` : `с ${opened_date}`}
          />
        ))
      }
    </div>
  );
}

export default DepositsList;
