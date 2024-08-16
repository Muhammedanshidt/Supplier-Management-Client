import { Route, Routes } from "react-router-dom";
import AdminLogin from "../src/pages/admin.pages/AdminLogin";
import AdminSidebar from "./components/admin.components/AdminSidebar";
import AdminHome from "./pages/admin.pages/AdminHome";
// import ProtectedAdminRoute from "./Authentications/ProtectedAdminRoute";
// import AdminLoginProttect from "./Authentications/AdminLoginProttect";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import NotFound from "./pages/NotFound";
import Suppliers from "./pages/admin.pages/Suppliers";
import LatexParchase from "./pages/admin.pages/LatexParchase";
import DrcUpdation from "./pages/admin.pages/DrcUpdation";
import Drivers from "./pages/admin.pages/Drivers";
import Tapers from "./pages/admin.pages/Tapers";

export const Axios = axios.create({
  baseURL: "http://localhost:3333/api",
});

const MainRoute = () => {
  return (
    // <Router>
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/admin-login"
          element={
            // <AdminLoginProttect>
            <AdminLogin />
            // </AdminLoginProttect>
          }
        />
        <Route
          path="/admin"
          element={
            // <ProtectedAdminRoute>
            <AdminSidebar />
            // </ProtectedAdminRoute>
          }
        >
          <Route
            index
            element={
              // <ProtectedAdminRoute>
              <AdminHome />
              // </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin/latex-parchase"
            element={
              // <ProtectedAdminRoute>
              <LatexParchase />
              // </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin/drc-updation"
            element={
              // <ProtectedAdminRoute>
              <DrcUpdation />
              // {/* </ProtectedAdminRoute> */}
            }
          />
          <Route
            path="/admin/suppliers"
            element={
              // <ProtectedAdminRoute>
              <Suppliers />
              // </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin/drivers"
            element={
              // <ProtectedAdminRoute>
              <Drivers />
              // </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin/tapers"
            element={
              // <ProtectedAdminRoute>
              <Tapers />
              // </ProtectedAdminRoute>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* // </Router> */}
    </>
  );
};

export default MainRoute;
