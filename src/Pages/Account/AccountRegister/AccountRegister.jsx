import React, { useState } from "react";
import { signInApi } from "../../../services/Account";

const AccountRegister = (props) => {
  //! Props
  const { setIsOpenSignIn, setIsOpenSignUp } = props;
  //! State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //! Function
  const handleRegister = async () => {
    setIsLoading(true);
    let res = await signInApi(name, address, email, phoneNumber, password);
    if (res && res?.data?.token) {
      localStorage.setItem("token", res?.data?.token);
      navigate("/");
    } else {
      if (res && res?.data?.statusCode === 401) {
        toast.error(res?.data?.msg);
      }
    }
    setIsLoading(false);
  };
  //! Effect
  //! Render
  return (
    <div className="form">
      <div className="center" style={{ textAlign: "center" }}>
        <h2>Đăng ký tài khoản</h2>
        <p>Chú ý các nội dung có dấu * bạn cần phải nhập</p>
      </div>
      <div id="registerForm" className="hh-form">
        <div className="form-controls">
          <label>Họ tên:</label>
          <div className="controls">
            <input
              type="text"
              placeholder="Họ tên *"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-controls">
          <label>Email:</label>
          <div className="controls">
            <input
              type="text"
              placeholder="Email *"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-controls">
          <label>Điện thoại:</label>
          <div className="controls">
            <input
              type="tel"
              placeholder="Điện thoại *"
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-controls">
          <label>Địa chỉ:</label>
          <div className="controls">
            <input
              type="text"
              placeholder="Địa chỉ *"
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-controls">
          <label>Mật khẩu:</label>
          <div className="controls">
            <input
              type="text"
              placeholder="Mật khẩu *"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
        </div>
        {/* <div className="form-controls">
            <label>Nhập lại mật khẩu:</label>
            <div className="controls">
              <input
                type="text"
                name="SecurityStamp"
                id="SecurityStamp"
                placeholder="Nhập lại mật khẩu *"
              />
            </div>
          </div> */}
        <div className="form-controls">
          <div className="button-group">
            <button className="btn btn-submit" onClick={handleRegister}>
              {isLoading ? (
                <i className="fas fa-spinner fa-pulse"></i>
              ) : (
                <p>ĐĂNG KÝ TÀI KHOẢN</p>
              )}
            </button>
            <button
              className="btn btn-link"
              onClick={() => {
                setIsOpenSignIn(true);
                setIsOpenSignUp(false);
              }}
            >
              ĐĂNG NHẬP
            </button>
          </div>
        </div>
        <div className="form-controls">
          <div className="submit-controls">
            <p>
              <strong>
                Bằng việc đăng kí này, bạn đã chấp nhận các chính sách của Hoàng
                Hà Mobile
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountRegister;
