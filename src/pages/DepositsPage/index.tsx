import QuickActions from "../../components/QuickActions";
import Tabs from "../../components/Tabs";
import {useMemo, useState} from "react";
import type {Tab} from "../../components/Tabs/types.ts";
import styles from "./DepositsPage.module.css";
import DepositsList from "../../components/DepositsList";
import {deposits} from "../../mocks/deposits.ts";

const tabs: Tab[] = [
  {
    title: "Активные",
    value: "active",
  },
  {
    title: "Закрытые",
    value: "closed",
  }
]

function DepositsPage() {
  const [activeTab, setActiveTab] = useState<string>('active');

  const filteredDeposits = useMemo(() => {
    return deposits.filter(deposit => deposit.status === activeTab);
  }, [activeTab])

  return (
    <>
      <QuickActions />
      <Tabs
        className={styles.tabs}
        value={activeTab}
        onUpdate={(value) => setActiveTab(value)}
        tabs={tabs}
      />
      <DepositsList deposits={filteredDeposits} />
    </>
  );
}

export default DepositsPage;
