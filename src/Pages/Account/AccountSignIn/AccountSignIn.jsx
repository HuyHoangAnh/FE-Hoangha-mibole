import React, { useState } from "react";
import { loginApi } from "../../../services/Account.jsx";
import { toast } from "react-toastify";

const AccountSignIn = (props) => {
  //! Props
  const { setIsOpenSignIn, setIsOpenSignUp } = props;
  //! State
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  //! Function
  const handleLogin = async () => {
    if (!account || !password) {
      toast.error("Email/Password is required!");
      return;
    }
    let res = await loginApi(account, password);
    console.log("checked", res?.data?.token);
  };
  //! Effect
  //! Render
  return (
    <div className="form">
      <h1>Đăng nhập</h1>
      <div className="internal">
        <input type="hidden" name="ReturnUrl" value="/Account" />
        <div className="row">
          <div className="label">Tài khoản</div>
          <div className="input">
            <input
              type="text"
              placeholder="Email or Phone number ..."
              value={account}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="label">Mật khẩu</div>
          <div className="input">
            <input
              type="password"
              placeholder="Password ..."
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <label className="checkbox-ctn">
            Nhớ đăng nhập
            <input type="checkbox" name="RememberMe" value="RememberMe" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="row">
          <div className="button-group">
            <button
              className="btn btn-submit"
              onClick={() => {
                handleLogin();
              }}
            >
              ĐĂNG NHẬP
            </button>
            <button
              className="btn btn-link"
              onClick={() => {
                setIsOpenSignIn(false);
                setIsOpenSignUp(true);
              }}
            >
              ĐĂNG KÝ
            </button>
          </div>
        </div>
        <div className="row">
          <p className="forgotpass">
            <a className="" href="/Account/ForgotPassword">
              Quên mật khẩu?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSignIn;
