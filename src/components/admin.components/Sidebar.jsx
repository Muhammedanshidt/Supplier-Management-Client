import React from "react";
import logoImg from "../../assets/Logo2.png"
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <>
      <aside
        className="fixed top-0 left-0 z-40 max-sm:w-10 w-64 h-screen pt-5 transition-transform bg-white border-r border-gray-200 translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <Link
            to="#"
            class="flex items-center justify-center ps-2.5 mb-4 dark:bg-white py-2 rounded-lg"
          >
            <img src={logoImg} class="h-10 w-36 me-3 sm:h-12" alt="Bone Logo" />
          </Link>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdDashboard className="w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.5h-3.81a4.49 4.49 0 0 0-.53-1.29l2.7-2.7a1.5 1.5 0 1 0-2.12-2.12l-2.7 2.7a4.49 4.49 0 0 0-1.29-.53V0h-3a.99.99 0 0 0-1 1v3.81a4.49 4.49 0 0 0-1.29.53l-2.7-2.7A1.5 1.5 0 1 0 .63 4.26l2.7 2.7a4.49 4.49 0 0 0-.53 1.29H0v3a.99.99 0 0 0 1 1h3.81a4.49 4.49 0 0 0 .53 1.29l-2.7 2.7a1.5 1.5 0 1 0 2.12 2.12l2.7-2.7a4.49 4.49 0 0 0 1.29.53V20h3a.99.99 0 0 0 1-1v-3.81a4.49 4.49 0 0 0 1.29-.53l2.7 2.7a1.5 1.5 0 0 0 2.12-2.12l-2.7-2.7a4.49 4.49 0 0 0 .53-1.29H17v-3a.99.99 0 0 0-1-1Zm-8 4a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .75a9.25 9.25 0 1 0 9.25 9.25A9.261 9.261 0 0 0 10 .75ZM10 15a1.25 1.25 0 1 1 1.25-1.25A1.261 1.261 0 0 1 10 15Zm1.5-4.5a1.5 1.5 0 0 1-3 0V5.25a1.5 1.5 0 0 1 3 0Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Help</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
