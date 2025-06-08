import {useEffect} from "react";
import {Outlet, useLocation} from "react-router-dom";
import Navigator from "../Navigator";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <main>
        <Outlet />
      </main>
      <Navigator />
    </>
  );
}

export default Layout;
