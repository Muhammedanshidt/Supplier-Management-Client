import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/Bone-logo.png";

const AdminNavbar = ({ toggleSidebar, isExpanded }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-between w-64 p-4 text-white">
        <Link
          to="/admin"
          className={`transform transition-all duration-300 ease-in-out ${
            isExpanded ? "opacity-100 scale-100 " : "opacity-0 scale-0 absolute"
          }`}
        >
          <img src={Logo} alt="B One Rubbers" className="w-28" />
        </Link>
        <button
          onClick={toggleSidebar}
          className="p-2 transition-colors duration-300 rounded-full text-cyan-950 hover:bg-gray-300"
        >
          <FaBars className="text-2xl" />
        </button>
      </div>
      <div className="">dsfgh</div>
      <div className="">dfa</div>
    </div>
  );
};

export default AdminNavbar;
