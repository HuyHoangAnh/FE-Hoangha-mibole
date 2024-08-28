import React, { useState } from "react";
import { loginApi } from "../../../services/Account.jsx";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AccountLogIn = (props) => {
  //! Props
  const { setIsOpenSignIn, setIsOpenSignUp } = props;
  //! State
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //! Function
  const handleLogin = async (event) => {
    event.preventDefault(); // Ngăn hành vi mặc định của form
    setIsLoading(true);
    let res = await loginApi(account, password);
    if (res && res?.data?.token) {
      localStorage.setItem("token", res?.data?.token);
      res?.data?.user?.role === "admin"
        ? navigate("/collections")
        : navigate("/");
      localStorage.setItem("userId", res?.data?.user?._id);
      localStorage.setItem("checkedAdmin", res?.data?.user?.role);
    } else {
      if (res && res?.data?.statusCode === 401) {
        toast.error(res?.data?.msg);
      }
    }
    setIsLoading(false);
  };

  //! Render
  return (
    <div
      className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
      style={{ width: "100%" }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnvBy2Gn-omtTb5QyI-FAhHpszeC4kesVZJA&s"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Tài khoản ( Email hoặc số điện thoại )
            </label>
            <div className="mt-2">
              <input
                value={account}
                onChange={(event) => setAccount(event.target.value)}
                type="text"
                className="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Mật khẩu
              </label>
            </div>
            <div className="mt-2">
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password" // Đổi sang type password để bảo mật
                className="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <button
            className="btn btn-link py-0"
            onClick={() => {
              setIsOpenSignIn(false);
              setIsOpenSignUp(true);
            }}
          >
            ĐĂNG KÝ
          </button>
        </p>
      </div>
    </div>
  );
};

export default AccountLogIn;
