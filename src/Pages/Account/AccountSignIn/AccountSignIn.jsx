import React, { useState } from "react";
import { loginApi } from '../../../services/Account.jsx';
import { toast } from "react-toastify";


const AccountSignIn = (props) => {
  //! Props
  const { setIsOpenSignIn, setIsOpenSignUp } = props;
  //! State
  const [email,setEmail] = useState("0969915001")
  const [password,setPassword] = useState("")
  const [isShowPassword, setIsShowPassword] = useState(false)
  //! Function
  const handleLogin = async () => {
    alert("hello world")
    if(!email || !password) {
      toast.error("Email/Password is required!");
      return;
    }
    let res = await loginApi(email, password);
    console.log("checked", res);
    
  };
  //! Effect
  //! Render
  return (
    <div class="form">
      <h1>Đăng nhập</h1>
      <div class="internal">
        {/* <form method="post"> */}
          <input type="hidden" name="ReturnUrl" value="/Account" />
          <div class="row">
            <div class="label">Tài khoản</div>
            <div class="input">
              <input
                type="text"
                placeholder="Email or Phone number ..."
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}
              />
            </div>
          </div>
          <div class="row">
            <div class="label">Mật khẩu</div>
            <div class="input">
              <input
                type="password"
                placeholder="Password ..."
                value={password}
                onChange={(event) => {setPassword(event.target.value)}}
              />
            </div>
          </div>
          <div class="row">
            <label class="checkbox-ctn">
              Nhớ đăng nhập
              <input type="checkbox" name="RememberMe" value="RememberMe" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="row">
            <div class="button-group">
              <button
                class="btn btn-submit"
                onClick={() => {
                  handleLogin();
                }}
              >
                ĐĂNG NHẬP
              </button>
              <button
                class="btn btn-link"
                onClick={() => {
                  setIsOpenSignIn(false);
                  setIsOpenSignUp(true);
                }}
              >
                ĐĂNG KÝ
              </button>
            </div>
          </div>
          <div class="row">
            <p class="forgotpass">
              <a class="" href="/Account/ForgotPassword">
                Quên mật khẩu?
              </a>
            </p>
          </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default AccountSignIn;
