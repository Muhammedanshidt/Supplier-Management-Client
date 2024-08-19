import React, { useState } from "react";
import {
  FaHome,
  FaTruck,
  FaUserTie,
  FaTree,
  FaFlask,
  FaSignOutAlt,
  FaBalanceScale,
} from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import AdminNavbar from "./AdminNavbar";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  // const Logout = () => {
  //   sessionStorage.removeItem("adminToken");
  //   toast.success("Successfully logged out!");
  //   setTimeout(() => {
  //     navigate("/admin-login");
  //   }, 1000);
  // };

  return (
<<<<<<< HEAD
    <div className="flex flex-col h-screen">
      <header>
        <AdminNavbar toggleSidebar={toggleSidebar} isExpanded={isExpanded} />
=======
    <div className="flex h-screen flex-col ">
      <header className="fixed left-0 top-0 right-0 z-50 ">
        <AdminNavbar toggleSidebar={toggleSidebar} isExpanded={isExpanded}/>
>>>>>>> 999ac96fa44d6e1b85c387e8204f6ae6ce1c471d
      </header>
      <div className="flex h-full pt-[72px] ">
        <aside
          className={`flex flex-col ${
            isExpanded ? "w-64 px-2" : "w-16"
          } bg-gradient-to-b from-[#38505f] to-[#0c1c23] text-white h-full transition-width duration-300 shadow-lg`}
        >
          <nav className="flex flex-col justify-between flex-1">
            <div className="flex flex-col px-1 mt-4 space-y-2">
              <SidebarItem
                icon={<FaHome />}
                label="Home"
                isExpanded={isExpanded}
                onClick={() => {
                  navigate("/admin");
                  setIsExpanded(!isExpanded);
                }}
              />
              <SidebarItem
                icon={<FaFlask />}
                label="Latex Parchase"
                isExpanded={isExpanded}
                onClick={() => {
                  navigate("/admin/latex-parchase");
                  setIsExpanded(false);
                }}
              />
              <SidebarItem
                icon={<FaBalanceScale />}
                label="DRC Updation"
                isExpanded={isExpanded}
                onClick={() => {
                  navigate("/admin/drc-updation");
                  setIsExpanded(false);
                }}
              />
              <SidebarItem
                icon={<FaUserTie />}
                label="Suppliers"
                isExpanded={isExpanded}
                onClick={() => {
                  navigate("/admin/suppliers");
                  setIsExpanded(false);
                }}
              />
              <SidebarItem
                icon={<FaTruck />}
                label="Drivers"
                isExpanded={isExpanded}
                onClick={() => {
                  navigate("/admin/drivers");
                  setIsExpanded(false);
                }}
              />
              <SidebarItem
                icon={<FaTree />}
                label="Tapers"
                isExpanded={isExpanded}
                onClick={() => {
                  navigate("/admin/tapers");
                  setIsExpanded(false);
                }}
              />
            </div>
            {/* <div className="px-1 mb-3">
              <SidebarItem
                icon={<FaSignOutAlt />}
                label="Logout"
                isExpanded={isExpanded}
                onClick={Logout}
              />
            </div> */}
          </nav>
          <div
            className={`text-center p-4 text-sm text-gray-400 ${
              isExpanded ? "block" : "hidden"
            }`}
          >
            © 2024 B One Rubbers
          </div>
        </aside>
<<<<<<< HEAD
        <main className="flex-1 overflow-auto bg-gray-50">
=======
        <main className="flex-1 bg-gray-50 overflow-auto pt-6">
>>>>>>> 999ac96fa44d6e1b85c387e8204f6ae6ce1c471d
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminSidebar;
