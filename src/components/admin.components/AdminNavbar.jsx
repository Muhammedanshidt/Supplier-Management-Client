import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Bone-logo.png";
import { IoIosNotifications } from "react-icons/io";
import { RiAdminLine } from "react-icons/ri";
import MessageDropdown from "./MessageDropdown";
import NotificationDropdown from "./NotificationDropdown";
import LogoutDropdown from "./LogoutDropdown";
import { toast } from "react-toastify";

const AdminNavbar = ({ toggleSidebar, isExpanded }) => {
  const [showMessageDropdown, setShowMessageDropdown] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);

  const navigate = useNavigate();

  const messages = [
    { sender: "John Doe", text: "Meeting at 3 PM" },
    { sender: "Jane Smith", text: "New task assigned" },
    // Add more messages here
  ];

  const notifications = [
    { title: "System Update", description: "System will be down at 12 AM" },
    {
      title: "New Comment",
      description: "You have a new comment on your post",
    },
    // Add more notifications here
  ];

  const handleClickMessageIcon = () => {
    if (showMessageDropdown) {
      setShowMessageDropdown(false);
    } else {
      setShowMessageDropdown(true);
      setShowNotificationDropdown(false);
    }
  };

  const handleClickNotificationIcon = () => {
    if (showNotificationDropdown) {
      setShowNotificationDropdown(false);
    } else {
      setShowNotificationDropdown(true);
      setShowMessageDropdown(false);
    }
  };

  const handleClickLogoutIcon = () => {
    setShowLogoutDropdown(!showLogoutDropdown);
    setShowMessageDropdown(false);
    setShowNotificationDropdown(false);
  };

  const closeMessageDropdown = () => setShowMessageDropdown(false);
  const closeNotificationDropdown = () => setShowNotificationDropdown(false);
  const closeLogoutDropdown = () => setShowLogoutDropdown(false);

  const handleLogout = () => {
    sessionStorage.removeItem("adminToken");
    toast.success("Successfully logged out!");
    setTimeout(() => {
      navigate("/admin-login");
    }, 1000);
  };

  return (

    <div className="flex items-center justify-between w-full bg-slate-100 shadow-md">
    <div
      className={`flex items-center p-4 transition-all duration-500 ease-in-out delay-150 ${
        isExpanded ? "w-64 justify-between" : "justify-start gap-4"
      }`}
    >
      {isExpanded ? (
        <>
          <Link
            to="/admin"
            className="transition-all duration-500 ease-in-out"
          >
            <img
              src={Logo}
              alt="B One Rubbers"
              className="w-28 transition-all duration-500 ease-in-out"
            />
          </Link>
          <button
            onClick={toggleSidebar}
            className="p-2 text-cyan-950 hover:bg-gray-300 rounded-full transition-all duration-500 ease-in-out"
          >
            <FaBars className="text-2xl" />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={toggleSidebar}
            className="p-2 text-cyan-950 hover:bg-gray-300 rounded-full transition-all duration-500 ease-in-out"
          >
            <FaBars className="text-2xl" />
          </button>
          <Link
            to="/admin"
            className="transition-all duration-500 ease-in-out delay-150"
          >
            <img
              src={Logo}
              alt="B One Rubbers"
              className="w-28 ml-2 transition-all duration-500 ease-in-out"
            />
          </Link>
        </>
      )}
    </div>

    <div className="flex flex-grow justify-between items-center p-4">
      <div className="flex-1 flex justify-center gap-12 font-medium">
        <Link to={"#"}>Employee</Link>
        <Link to={"#"}>Vehicles</Link>
        <Link to={"#"}>Latex Rate</Link>
      </div>
      <div className="flex-1 flex gap-20 justify-center  relative">
        <span
          onClick={handleClickMessageIcon}
          className="cursor-pointer relative hover:bg-slate-300 p-1 rounded-full"
        >
          <MdMessage className="text-2xl"/>
          {messages.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              {messages.length}
            </span>
          )}
          <MessageDropdown
            isOpen={showMessageDropdown}
            messages={messages}
            onClose={closeMessageDropdown}
          />
        </span>
        <span
          onClick={handleClickNotificationIcon}
          className="cursor-pointer relative hover:bg-slate-300 p-1 rounded-full"
        >
          <IoIosNotifications className="text-2xl"/>
          {notifications.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              {notifications.length}
            </span>
          )}
          <NotificationDropdown
            isOpen={showNotificationDropdown}
            notifications={notifications}
            onClose={closeNotificationDropdown}
          />
        </span>
        <span onClick={handleClickLogoutIcon} className="cursor-pointer relative hover:bg-slate-300 p-1 rounded-full">
          <RiAdminLine className="text-2xl"/>
          <LogoutDropdown 
          isOpen={showLogoutDropdown} 
          onClose={closeLogoutDropdown} 
          onLogout={handleLogout} 
        />
        </span>
      </div>
    </div>
  </div>
  );
};

export default AdminNavbar;