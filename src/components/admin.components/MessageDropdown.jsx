import React, { useEffect, useRef } from "react";

const MessageDropdown = ({ isOpen, messages, onClose }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mouseenter", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mouseenter", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    isOpen && (
      <div ref={dropdownRef} className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg p-4 z-50">
        {messages.length > 0 ? (
          <ul>
            {messages.map((message, index) => (
              <li key={index} className="py-2 px-3 hover:bg-gray-100 rounded border-b-2">
                <p className="font-semibold">{message.sender}</p>
                <p className="text-sm text-gray-600">{message.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No new messages</p>
        )}
      </div>
    )
  );
};

export default MessageDropdown;
