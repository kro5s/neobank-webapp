import styles from "./QuickActions.module.css";
import clsx from "clsx";
import type {QuickAction} from "./types.ts";
import {Link} from "react-router-dom";
import openAccount from "../../assets/icons/open-account.svg";
import openDeposit from "../../assets/icons/open-deposit.svg";

const actions: QuickAction[] = [
  {
    icon: <img src={openAccount} alt="Открыть счет"/>,
    title: "Открыть счет",
    href: "/open-account"
  },
  {
    icon: <img src={openDeposit} alt="Открыть вклад"/>,
    title: "Открыть вклад",
    href: "/open-deposit"
  }
]

function QuickActions() {
  return (
    <>
      <h2 className={clsx("title", styles.title)}>Быстрые действия</h2>
      <div className={styles.actions}>
        {actions.map(({icon, title, href}) => (
          <Link key={title} className={styles.action} to={href}>
            {icon}
            <span>{title}</span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default QuickActions;
