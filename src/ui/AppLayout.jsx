import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <main>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </main>
  );
}

export default AppLayout;
