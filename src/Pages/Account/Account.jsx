import React, { useState } from "react";
import Header from "../../Component/Header/Header";
import { listHeader } from "../../constant";
import styled from "styled-components";
import Social from "../../common/Social";
import LoginBg from "../../assets/login-bg.png";
import AccountSignUp from "./AccountSignUp/AccountSignUp";
import AccountSignIn from "./AccountSignIn/AccountSignIn";
import NewHeader from "../../Component/Header/Newheader";

const Account = () => {
  //! Props
  //! State
  const [isOpenSignIn, setIsOpenSignIn] = useState(true);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  //! Funtion
  //! Effect
  //! Render
  return (
    <SWrapAccount>
      <Header listHeader={listHeader} />
      {/* <NewHeader /> */}
      <div style={{ height: "52px" }}></div>
      <div class="container">
        <div class="login-form">
          <div class="login-bg">
            <img src={LoginBg} alt="login background" />
          </div>
          {isOpenSignIn && <AccountSignIn setIsOpenSignIn={setIsOpenSignIn} setIsOpenSignUp={setIsOpenSignUp} />}
          {isOpenSignUp && <AccountSignUp setIsOpenSignIn={setIsOpenSignIn} setIsOpenSignUp={setIsOpenSignUp} />}
        </div>
      </div>
      <Social />
    </SWrapAccount>
  );
};

export default Account;

export const SWrapAccount = styled.div`
  .login-form {
    margin: 30px 0;
    display: flex;
    background: #fff;
    border-radius: 11px;
    width: 100%;
    .login-bg {
      background: #fbe9e7;
      padding: 40px;
      border-radius: 10px 0 0 11px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      img {
        margin: 0 auto;
        height: 356px;
        max-width: 310px;
      }
    }
    .form {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 20px 120px;
      h1 {
        font-size: 2em;
      }
      .row {
        margin-bottom: 15px;
        .label {
          margin-bottom: 5px;
          font-weight: bold;
          font-size: 13px;
        }
        .input {
          display: flex;
        }
        input {
          background: #e5e5e5;
          border-radius: 4px;
          padding: 10px;
          border: none;
          width: 100%;
        }
      }
    }
    .button-group {
      display: flex;
      justify-content: space-around;
      gap: 10px;
      .btn {
        width: 100%;
        cursor: pointer;
      }
      .btn-submit {
        background-image: linear-gradient(180deg, #00917a 0%, #00483d 100%);
        color: #fff;
        padding: 12px;
      }
      .btn-link {
        border: 2px solid #00483d;
      }
    }
  }
  .checkbox-ctn {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 15px;
    /* -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none; */
    user-select: none;
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }
  .checkbox-ctn input:checked ~ .checkmark:after {
    display: block;
  }
  .checkbox-ctn .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  .center {
    h2 {
      font-size: 2em;
    }
    p {
      font-size: 1.3em;
    }
  }

  /* Sing up */
  .form-controls {
    display: flex;
    margin-bottom: 15px;
    padding: 0 60px 0 40px;
    justify-content: center;
    label {
      flex-basis: 20%;
      white-space: nowrap;
      margin-right: 30px;
      padding: 8px 0;
      font-weight: bold;
      color: #222;
      min-width: 140px;
    }
    .controls {
      display: flex;
      flex-basis: 100%;
      flex-grow: 3;
      width: 100%;
      input[type="text"],input[type=tel],select {
        width: 100%;
        background: #e5e5e5 0% 0% no-repeat padding-box;
        border-radius: 13px;
        outline: none;
        border: none;
        padding: 8px 20px;
        font-weight: 600;
        color: #858585;
      }
    }
    .button-group .btn{
      width: 250px !important;
    }
  }
  .radio-ctn .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #aaa;
}
`;
