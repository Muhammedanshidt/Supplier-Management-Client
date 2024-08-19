import React, { useEffect, useRef } from "react";

const NotificationDropdown = ({ isOpen, notifications, onClose }) => {
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
      <div ref={dropdownRef} className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg p-4 z-50">
        {notifications.length > 0 ? (
          <ul>
            {notifications.map((notification, index) => (
              <li key={index} className="py-2 px-3 hover:bg-gray-100 rounded border-b-2">
                <p className="font-semibold">{notification.title}</p>
                <p className="text-sm text-gray-600">{notification.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No new notifications</p>
        )}
      </div>
    )
  );
};

export default NotificationDropdown;
