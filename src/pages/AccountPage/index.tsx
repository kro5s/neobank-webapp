import InfoPage from "../../components/InfoPage";
import {useParams} from "react-router-dom";
import React, {useMemo} from "react";
import styles from "../DepositPage/DepositPage.module.css";
import {accounts} from "../../mocks/accounts.ts";
import type {Account} from "../../types/types.ts";
import {prepareStatus} from "../../helpers/prepareStatus";

const formatter = new Intl.NumberFormat("ru");

const buildAccountInfoMap = (account: Account) => {
  const result: {[key: string]: string | React.ReactNode} = {
    "Валюта": account.currency,
    "Баланс": `${formatter.format(account.balance)}₽`,
    "Доступно": `${formatter.format(account.available)}₽`,
    "Статус": prepareStatus(account.status),
    "Открыт": account.opened_date,
  }

  if (account.closed_date) result["Закрыт"] = account.closed_date

  return result;
}

function AccountPage() {
  const {id} = useParams();

  const account = useMemo(() => {
    return accounts.find(account => account.id === id);
  }, [id]);

  if (!account) return <div className={styles.error}>Вклад не найден</div>

  return (
    <InfoPage
      title={`Счет ${account.title}`}
      map={buildAccountInfoMap(account)}
      actions={account.status === 'active' ? [{
        title: "Закрыть счет", handler: () => {
        }, accent: true
      }] : []}
    />
  );
}

export default AccountPage;
