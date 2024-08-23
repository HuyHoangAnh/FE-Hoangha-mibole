import React, { useEffect, useState } from "react";
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
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //! Function
  const handleLogin = async () => {
    setIsLoading(true)
    if (!account || !password) {
      toast.error("Email/Password is required!");
      return;
    }
    let res = await loginApi(account, password);
    if (res && res?.data?.token) {
      localStorage.setItem("token", res?.data?.token);
      res?.data?.user?.role === 'admin' ? navigate("/collections") : navigate("/");
      localStorage.setItem("userId", res?.data?.user?._id)
      localStorage.setItem("checkedAdmin", res?.data?.user?.role)
    } else {
      if (res && res?.data?.statusCode === 401) {
        toast.error(res?.data?.msg);
      }
    }
    setIsLoading(false)
  };
  //! Effect
  // useEffect(() => {
  //   let token = localStorage.getItem("token");
  //   token && navigate("/")
  // }, [])
  //! Render
  return (
    // <div className="form">
    //   <h1>Đăng nhập</h1>
    //   <div className="internal">
    //     <input type="hidden" name="ReturnUrl" value="/Account" />
    //     <div className="row">
    //       <div className="label">Tài khoản</div>
    //       <div className="input">
    //         <input
    //           type="text"
    //           placeholder="Email or Phone number ..."
    //           value={account}
    //           onChange={(event) => {
    //             setAccount(event.target.value);
    //           }}
    //         />
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="label">Mật khẩu</div>
    //       <div className="input">
    //         <input
    //           type="password"
    //           placeholder="Password ..."
    //           value={password}
    //           onChange={(event) => {
    //             setPassword(event.target.value);
    //           }}
    //         />
    //       </div>
    //     </div>
    //     <div className="row">
    //       <label className="checkbox-ctn">
    //         Nhớ đăng nhập
    //         <input type="checkbox" name="RememberMe" value="RememberMe" />
    //         <span className="checkmark"></span>
    //       </label>
    //     </div>
    //     <div className="row">
    //       <div className="button-group">
    //         <button
    //           className="btn btn-submit"
    //           onClick={() => {
    //             handleLogin();
    //           }}
    //         >
    //         {isLoading ?
    //           <i className="fas fa-spinner fa-pulse"></i>
    //          : <p>ĐĂNG NHẬP</p> 
    //          }

    //         </button>
    //         <button
    //           className="btn btn-link"
    //           onClick={() => {
    //             setIsOpenSignIn(false);
    //             setIsOpenSignUp(true);
    //           }}
    //         >
    //           ĐĂNG KÝ
    //         </button>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <p className="forgotpass">
    //         <a className="" href="/Account/ForgotPassword">
    //           Quên mật khẩu?
    //         </a>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" style={{ width: "100%" }}>
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnvBy2Gn-omtTb5QyI-FAhHpszeC4kesVZJA&s" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Tài khoản ( Email hoặc số điện thoại )</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mật khẩu</label>
              {/* <div class="text-sm">
                <div className="row">
                  <label className="checkbox-ctn">
                    Nhớ mật khẩu
                    <input type="checkbox" name="RememberMe" value="RememberMe" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div> */}
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <button
            className="btn btn-link"
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
