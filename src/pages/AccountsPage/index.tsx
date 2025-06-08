import QuickActions from "../../components/QuickActions";
import Tabs from "../../components/Tabs";
import styles from "../DepositsPage/DepositsPage.module.css";
import {useMemo, useState} from "react";
import type {Tab} from "../../components/Tabs/types.ts";
import {accounts} from "../../mocks/accounts.ts";
import AccountsList from "../../components/AccountsList";

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

function AccountsPage() {
  const [activeTab, setActiveTab] = useState<string>('active');

  const filteredAccounts = useMemo(() => {
    return accounts.filter(account => account.status === activeTab);
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
      <AccountsList accounts={filteredAccounts} />
    </>
  );
}

export default AccountsPage;
