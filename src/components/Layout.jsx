import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import BarraMovil from "./BarraMovil";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <div className="pb-24 sm:pb-0">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      <BarraMovil />
    </>
  );
}
