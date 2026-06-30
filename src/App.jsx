import { useEffect } from "react";

import Header from "./components/header/Header";
import VerticalNavBar from "./components/navbar/VerticalNavBar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";

export default function App() {
  useEffect(() => {
    document.body.setAttribute("data-topbar", "colored");
    document.body.classList.remove("vertical-collpsed", "sidebar-enable", "right-bar-enabled");

    return () => {
      document.body.removeAttribute("data-topbar");
      document.body.classList.remove("vertical-collpsed", "sidebar-enable", "right-bar-enabled");
    };
  }, []);

  return (
    <>
      <div id="layout-wrapper">
        <Header />
        <VerticalNavBar />
        <MainContent />
      </div>
      <RightSidebar />
      <div
        className="rightbar-overlay"
        onClick={() => document.body.classList.remove("right-bar-enabled")}
      />
    </>
  );
}
