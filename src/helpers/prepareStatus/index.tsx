import clsx from "clsx";
import styles from "./PrepareStatus.module.css";

const statusesMap: { [key: string]: string } = {
  'active': "АКТИВЕН",
  'closed': "ЗАКРЫТ",
}

export function prepareStatus(status: string) {
  return (
    <span
      className={
        clsx(styles.status, {
          [styles.active]: status === 'active',
          [styles.closed]: status === 'closed',
        })
      }
    >{statusesMap[status] || status}</span>
  )
}