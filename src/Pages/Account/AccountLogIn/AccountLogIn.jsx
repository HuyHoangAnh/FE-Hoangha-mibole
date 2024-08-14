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
      navigate("/")
    } else {
      if (res && res?.data?.statusCode === 401) {
        toast.error(res?.data?.msg);
      }
    }
    setIsLoading(false)
  };
  //! Effect
  useEffect(() => {
    let token = localStorage.getItem("token");
    token && navigate("/")
  }, [])
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
                setAccount(event.target.value);
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
            {isLoading ?
              <i className="fas fa-spinner fa-pulse"></i>
             : <p>ĐĂNG NHẬP</p> 
             }
              
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

export default AccountLogIn;
