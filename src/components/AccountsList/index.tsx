import styles from "../DepositsList/DepositsList.module.css";
import Card from "../Card";
import type {Account} from "../../types/types.ts";

const formatter = new Intl.NumberFormat("ru");

interface AccountsListProps {
  accounts: Account[];
}

function AccountsList({accounts}: AccountsListProps) {
  return (
    <div className={styles.list}>
      {
        accounts.map(({id, title, balance, status, opened_date, available}) => (
          <Card
            key={id}
            title={title.replace(/^\d\d\d\d \d\d\d\d/, "**** ****")}
            total={balance}
            meta={<div className={styles.rate}>Доступно {formatter.format(available)}₽</div>}
            status={status}
            detailsHref={`/accounts/${id}`}
            dateInfo={`с ${opened_date}`}
          />
        ))
      }
    </div>
  );
}

export default AccountsList;
