import React, { useState } from "react";
import {
  FaHome,
  FaBars,
  FaTruck,
  FaUserTie,
  FaTree,
  FaFlask,
  FaSignOutAlt,
  FaBalanceScale,
} from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import Logo from "../../assets/Bone-logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const Logout = () => {
    sessionStorage.removeItem("adminToken");
    toast.success("Successfully logged out!");
    setTimeout(() => {
      navigate("/admin-login");
    }, 1000);
  };
  return (
    <div className="flex h-screen">
      <div
        className={`flex flex-col ${
          isExpanded ? "w-64 px-2" : "w-16"
        } bg-gradient-to-b from-[#38505f] to-[#0c1c23] text-white h-full transition-width duration-300  shadow-lg`}
      >
        <div
          className={`flex items-center    ${
            isExpanded ? "bg-slate-50 border-4 rounded-xl mt-2 p-4 justify-between" : "p-2"
          } `}
        >
          <Link to={'/admin'}>
          <img
            src={Logo}
            alt="BOne Rubbers"
            className={`transition-all duration-500 ease-in-out ${
              isExpanded ? "block" : "hidden"
            } w-32`}
          />
          </Link>
          <button
            onClick={toggleSidebar}
            className={`${
              isExpanded
                ? "text-cyan-900 hover:bg-gray-200"
                : "text-white hover:bg-gray-500"
            } p-2 rounded-full transition-colors duration-300`}
          >
            <FaBars className="text-2xl " />
          </button>
        </div>
        <nav className="flex flex-col justify-between flex-1">
          <div className="flex flex-col space-y-2 mt-4 px-1">
            <SidebarItem
              icon={<FaHome />}
              label="Home"
              isExpanded={isExpanded}
              onClick={() => {
                navigate("/admin");
                setIsExpanded(false);
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
          <div className="px-1 mb-3">
            <SidebarItem
              icon={<FaSignOutAlt />}
              label="Logout"
              isExpanded={isExpanded}
              onClick={Logout}
            />
          </div>
        </nav>
        <div
          className={`text-center p-4 text-sm text-gray-400 ${
            isExpanded ? "block" : "hidden"
          }`}
        >
          © 2024 B One Rubbers
        </div>
      </div>
      <div className="flex-1 bg-gray-50 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminSidebar;
