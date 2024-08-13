import { Router, Route, Routes } from "react-router-dom";
import AdminLogin from "../src/components/admin.components/AdminLogin";
import AdminSidebar from "./components/admin.components/AdminSidebar";
import AdminHome from "./pages/admin.pages/AdminHome";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const Axios = axios.create({
    baseURL: "http://localhost:3333/api"
})


const MainRoute = () => {
  return (
    // <Router>
    <>
      <ToastContainer />
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/admin" element={<AdminSidebar />}>
          <Route path="home" element={<AdminHome />} />
        </Route>
      </Routes>
      {/* // </Router> */}
    </>
  );
};

export default MainRoute;