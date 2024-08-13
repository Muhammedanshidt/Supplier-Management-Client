import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import Logo1 from "../../assets/Bone-logo.png";
import { Axios } from "../../MainRoute";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await Axios.post("/admin/login", data);
      const { message, adminToken } = response.data;
      toast.success(message);
      sessionStorage.setItem("adminToken", adminToken);
      reset();
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    } catch (error) {
      toast.error(error.response.data.error || "Login failed");
      console.error("Login failed", error);
    }
  };

  return (
    <div className=" h-screen flex items-center">
      <div className="h-[90%] w-[95%] mx-auto rounded-3xl shadow-lg lg:flex flex-col md:flex-row md:justify-between lg:bg-rubberTreeDesktop bg-rubberTreeMobile bg-no-repeat lg:bg-contain bg-cover bg-center lg:bg-left">
        <div className="flex-1"></div>
        <div className="flex-1 lg:bg-[#CCD1CD] rounded-r-3xl flex justify-center items-center">
          <div className="sm:w-[350px] bg-slate-50 p-4 rounded-2xl shadow-md">
            <div className=" flex justify-center my-4">
              <img src={Logo1} alt="B-One Rubbers Logo" className="w-36" />
            </div>
            <h1 className="text-3xl font-bold  text-cyan-900 border-b-2 border-cyan-900 p-2">
              Admin Login
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="my-4 p-2 flex flex-col justify-evenly "
            >
              <label htmlFor="username" className="text-cyan-900 font-medium ">
                Username
              </label>
              <input
                className={`px-2 py-1 border-2 outline-none rounded-md shadow appearance-none ${
                  errors.username && "border-red-500"
                }`}
                type="text"
                id="username"
                placeholder="Username"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
              <label
                htmlFor="password"
                className="text-cyan-900 font-medium mt-2"
              >
                Password
              </label>
              <div
                className={`flex justify-between items-center border-2 pr-2 rounded-md shadow appearance-none ${
                  errors.password && "border-red-500"
                }`}
              >
                <input
                  className="px-2 py-1 outline-none rounded-md w-11/12 bg-slate-50"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder={showPassword ? "Password" : "*********"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <span
                  className="text-2xl cursor-pointer hover:bg-slate-300 rounded-3xl text-cyan-900"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
              <button
                type="submit"
                className="shadow w-full py-1 my-4 bg-cyan-900 text-white text-xl rounded-md font-medium"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
