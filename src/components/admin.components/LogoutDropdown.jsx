import { useEffect, useRef } from "react";
import { MdLogout } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const LogoutDropdown = ({ isOpen, onClose, onLogout }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    isOpen && (
      <div
        ref={dropdownRef}
        className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg p-2 z-50 "
      >
        <ul className="">
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer border-b-2">
             <span className="flex gap-4 items-center">

            <IoMdSettings />
            Settings
             </span>
          </li>
          <li
            className="py-2 px-4 hover:bg-gray-100 cursor-pointer font-semibold text-red-600 "
            onClick={onLogout}
          >
            <span className="flex gap-4 items-center">
              <MdLogout />
              Logout
            </span>
          </li>
        </ul>
      </div>
    )
  );
};

export default LogoutDropdown;
