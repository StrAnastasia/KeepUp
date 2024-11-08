import { Outlet } from "react-router-dom";
import "./Layout.css";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="GrandWrapper">
      <Sidebar />
      <div className="Content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
