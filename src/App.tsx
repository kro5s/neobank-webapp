import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram.ts";
import {Route, Routes} from "react-router-dom";
import DepositsPage from "./pages/DepositsPage";
import Layout from "./components/Layout";
import RootPage from "./pages/RootPage";
import DepositPage from "./pages/DepositPage";
import OpenDeposit from "./pages/OpenDepositPage";
import AccountsPage from "./pages/AccountsPage";
import AccountPage from "./pages/AccountPage";
import OpenAccountPage from "./pages/OpenAccountPage";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RootPage />} />
        <Route path="/deposits" element={<DepositsPage />} />
        <Route path="/deposits/:id" element={<DepositPage />} />
        <Route path="/open-deposit" element={<OpenDeposit />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/accounts/:id" element={<AccountPage />} />
        <Route path="/open-account" element={<OpenAccountPage />} />
        <Route path="/loans" element={<></>} />
      </Route>
    </Routes>
  );
}

export default App
