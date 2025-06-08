import {useParams} from "react-router-dom";
import {useMemo} from "react";
import {deposits} from "../../mocks/deposits.ts";
import styles from "./DepositPage.module.css";
import InfoPage from "../../components/InfoPage";
import type {Deposit} from "../../types/types.ts";
import {prepareStatus} from "../../helpers/prepareStatus";
import type {InfoPageAction} from "../../components/InfoPage/types.ts";

const formatter = new Intl.NumberFormat("ru");

const buildDepositInfoMap = (deposit: Deposit) => ({
  "Название": deposit.name,
  "Сумма": `${formatter.format(deposit.total)}₽`,
  "Ставка": `${deposit.rate}%`,
  "Срок": `${deposit.duration} мес.`,
  "Статус": prepareStatus(deposit.status),
  "Открыт": deposit.opened_date,
  "Плановое закрытие": deposit.closing_date,
  "Пролонгация": deposit.prolongation ? "Вкл." : "Выкл."
})

const buildDepositActions = (deposit: Deposit) => {
  const actions: InfoPageAction[] = [];

  if (!deposit.prolongation && deposit.status !== 'closed') {
    actions.push({
      title: "Пролонгировать",
      handler: () => {},
    })
  }

  if (deposit.status === 'active') {
    actions.push({
      title: "Закрыть вклад",
      handler: () => {}
    })
  }

  if (actions.length > 0) {
    actions[0].accent = true;
  }

  return actions;
}

function DepositPage() {
  const {id} = useParams();

  const deposit = useMemo(() => {
    return deposits.find(deposit => deposit.id === id);
  }, [id]);

  if (!deposit) return <div className={styles.error}>Вклад не найден</div>

  return (
    <InfoPage
      title={`Вклад №${deposit.title}`}
      map={buildDepositInfoMap(deposit)}
      actions={buildDepositActions(deposit)}
    />
  );
}

export default DepositPage;
