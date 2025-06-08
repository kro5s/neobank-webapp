import styles from "./Tabs.module.css";
import type {TabsProps} from "./types.ts";
import clsx from "clsx";

function Tabs({tabs, value, onUpdate, className = ''}: TabsProps) {
  const handleClick = (value: string) => () => {
    onUpdate(value)
  }

  return (
    <div className={styles.tabs}>
      {
        tabs.map(tab => (
          <button
            key={tab.value}
            className={clsx(styles.tab, className, {
              [styles.active]: value === tab.value,
            })}
            onClick={handleClick(tab.value)}
          >
            {tab.title}
          </button>
        ))
      }
    </div>
  );
}

export default Tabs;
