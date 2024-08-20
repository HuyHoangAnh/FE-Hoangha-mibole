import React, { useEffect, useState } from "react";
import { getUserDetailApi, pathUserDetailApi } from "../../services/Account";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { listHeader } from "../../constant";
import Header from "../../Component/Header/Header";
import Social from "../../common/Social";

const Profile = () => {
  //! Props
  //! State
  const [isChangeProfile, setIsChangeProfile] = useState(false)
  const [profileUser, setProfileUser] = useState({});
  const { refetch, data } = useQuery({
    queryKey: ["user-data"],
    queryFn: () => getUserDetailApi(localStorage.getItem("userId")),
    enabled: true,
    onSuccess: (response) => {
      setProfileUser(response?.data?.user);
    },
  });
  const [nameProfile, setNameProfile] = useState(profileUser?.name);
  const [emailProfile, setEmailProfile] = useState(profileUser?.email);
  const [addressProfile, setAddressProfile] = useState(profileUser?.address);
  const [phoneNumberProfile, setPhoneNumberProfile] = useState(profileUser?.phoneNumber);
  const [password, setPassword] = useState("");
  //! Function
  const handleSave = async () => {
    setIsChangeProfile(false)
    let res = await pathUserDetailApi(profileUser?._id, profileUser);
    console.log("checked",res);
  };
  //! Effect
  useEffect(() => {
    refetch && refetch();
    setNameProfile(profileUser?.name);
    setEmailProfile(profileUser?.email);
    setAddressProfile(profileUser?.address);
    setPhoneNumberProfile(profileUser?.phoneNumber);
  }, [profileUser]);
  //! Render
  return (
    <SWrapProfile>
      <div className="profile-container">
        <div>
          <Social />
        </div>
        <div className="container">
          <h1 className="title">Hồ sơ của tôi</h1>
          <div className="form">
            <div className="form-controls">
              <label>Họ tên:</label>
              <div className="controls">
                <input
                  type="text"
                  value={nameProfile}
                  disabled={!isChangeProfile}
                  onChange={(e) => setNameProfile(e.target.value)}
                />
              </div>
            </div>
            <div className="form-controls">
              <label>Email:</label>
              <div className="controls">
                <input
                  type="text"
                  value={emailProfile}
                  disabled={!isChangeProfile}
                  onChange={(e) => setEmailProfile(e.target.value)}
                />
              </div>
            </div>
            <div className="form-controls">
              <label>Điện thoại:</label>
              <div className="controls">
                <input
                  type="tel"
                  value={phoneNumberProfile}
                  disabled={!isChangeProfile}
                  onChange={(e) => setPhoneNumberProfile(e.target.value)}
                />
              </div>
            </div>
            <div className="form-controls">
              <label>Địa chỉ:</label>
              <div className="controls">
                <input
                  type="text"
                  value={addressProfile}
                  disabled={!isChangeProfile}
                  onChange={(e) => setAddressProfile(e.target.value)}
                />
              </div>
            </div>
            <div className="form-controls">
          <div className="button-group">
            <button
              className="btn btn-link"
              onClick={() => {
                setIsChangeProfile(true)
              }}
            >
              Sửa hồ sơ
            </button>
            <button
              className={`btn ${isChangeProfile ? "btn-submit" : "btn-not-submit"}`}
              onClick={handleSave}
              disabled={!isChangeProfile}
            >
              Lưu
            </button>
          </div>
        </div>
          </div>
        </div>
      </div>
    </SWrapProfile>
  );
};

export default Profile;

export const SWrapProfile = styled.div`
  .profile-container {
    display: flex;
    flex-direction: column-reverse;
    color: black;
    // align-items: center;
  }
  .container {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    h1.title {
      font-size: 26px;
      width: 100%;
    }
  }
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
      input[type="text"],
      input[type="tel"],
      select {
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
    .button-group .btn {
      width: 250px !important;
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
        padding: 12px;
      }
    }
`;
