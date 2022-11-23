import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <>
      <div className=" d-flex">
        <Sidebar />
        <div className="w-100">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
