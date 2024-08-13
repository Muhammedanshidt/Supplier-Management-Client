import { Route, Routes } from "react-router-dom";
import AdminLogin from "../src/components/admin.components/AdminLogin";
import AdminSidebar from "./components/admin.components/AdminSidebar";
import AdminHome from "./pages/admin.pages/AdminHome";
import ProtectedAdminRoute from "./Authentications/ProtectedAdminRoute";
import RedirectIfAuthenticated from "./Authentications/RedirectIfAuthenticated";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Assemble from "./components/admin.components/Assemble";
import StatusCards from "./components/admin.components/StatusCards";

export const Axios = axios.create({
  baseURL: "http://localhost:3333/api",
});

const MainRoute = () => {
  return (
    // <Router>
    <>
      <ToastContainer />
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/admin" element={<AdminSidebar />}>
          <Route index element={<StatusCards/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      {/* // </Router> */}
    </>
  );
};

export default MainRoute;