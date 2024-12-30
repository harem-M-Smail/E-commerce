import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div className="root">
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};
export default Root;
