import React, { useEffect, useState } from "react";
import { getUserDetailApi, pathUserDetailApi } from "../../services/Account";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { listHeader } from "../../constant";
import Header from "../../Component/Header/Header";
import Social from "../../common/Social";
import { Password } from "@mui/icons-material";

const Profile = () => {
  //! Props
  //! State
  const [isChangeProfile, setIsChangeProfile] = useState(false);
  const [profileUser, setProfileUser] = useState({});
  const { refetch, data } = useQuery({
    queryKey: ["user-data"],
    queryFn: () => getUserDetailApi(localStorage.getItem("userId")),
    enabled: true,
    onSuccess: (response) => {
      setProfileUser(response?.data?.user);
    },
  });
  const [nameProfile, setNameProfile] = useState("");
  const [emailProfile, setEmailProfile] = useState("");
  const [addressProfile, setAddressProfile] = useState("");
  const [phoneNumberProfile, setPhoneNumberProfile] = useState("");
  const [passwordProfile, setPasswordProfile] = useState("");
  //! Function
  const handleSave = async () => {
    setIsChangeProfile(false);
    const updatedProfileUser = {
      ...profileUser,
      address: addressProfile,
      email: emailProfile,
      phoneNumber: phoneNumberProfile,
      name: nameProfile,
      password: passwordProfile,
    };
    let res = await pathUserDetailApi(profileUser?._id, updatedProfileUser);
  };
  //! Effect
  useEffect(() => {
    refetch && refetch();
    setNameProfile(profileUser?.name);
    setEmailProfile(profileUser?.email);
    setAddressProfile(profileUser?.address);
    setPhoneNumberProfile(profileUser?.phoneNumber);
    setPasswordProfile(profileUser?.password);
  }, [profileUser]);
  //! Render
  return (
    <SWrapProfile>
      <div className="profile-container">
        <div className="container">
          <div class="w-full">
            <div class="px-4 sm:px-0 pt-20">
              <h3 class="text-3xl font-semibold leading-7 text-gray-900">
                Thông tin cá nhân
              </h3>
            </div>
            <div class="mt-6 border-t border-black">
              <dl>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                  <dt class="text-sm font-medium leading-6 text-gray-900 pl-20">
                    Họ tên
                  </dt>
                  <input
                    class={`px-2 py-1 mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 w-80 bg-white ${
                      isChangeProfile ? "border-input" : ""
                    }`}
                    type="text"
                    value={nameProfile}
                    disabled={!isChangeProfile}
                    onChange={(e) => setNameProfile(e.target.value)}
                  />
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900 pl-20">
                    Số điện thoại
                  </dt>
                  <input
                    class={`px-2 py-1 mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 w-80 bg-white ${
                      isChangeProfile ? "border-input" : ""
                    }`}
                    type="tel"
                    value={phoneNumberProfile}
                    disabled={!isChangeProfile}
                    onChange={(e) => setPhoneNumberProfile(e.target.value)}
                  />
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900 pl-20">
                    Email
                  </dt>
                  <input
                    class={`px-2 py-1 mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 w-80 bg-white ${
                      isChangeProfile ? "border-input" : ""
                    }`}
                    type="text"
                    value={emailProfile}
                    disabled={!isChangeProfile}
                    onChange={(e) => setEmailProfile(e.target.value)}
                  />
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900 pl-20">
                    Địa chỉ
                  </dt>
                  <input
                    class={`px-2 py-1 mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 w-80 bg-white ${
                      isChangeProfile ? "border-input" : ""
                    }`}
                    type="text"
                    value={addressProfile}
                    disabled={!isChangeProfile}
                    onChange={(e) => setAddressProfile(e.target.value)}
                  />
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900 pl-20">
                    Mật khẩu
                  </dt>
                  <input
                    class={`px-2 py-1 mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 w-80 bg-white ${
                      isChangeProfile ? "border-input" : ""
                    }`}
                    type="text"
                    value={passwordProfile}
                    disabled={!isChangeProfile}
                    onChange={(e) => setPasswordProfile(e.target.value)}
                  />
                </div>
              </dl>
              <div className="button-group w-4/12">
                <button
                  className="btn btn-link p-3"
                  onClick={() => {
                    setIsChangeProfile(true);
                  }}
                >
                  Sửa hồ sơ
                </button>
                <button
                  className={`btn p-3 ${
                    isChangeProfile ? "btn-submit" : "btn-not-submit"
                  }`}
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
  }
  .border-input{
    border: solid 1px #c0c0c0;
    border-radius: 8px;
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
    }
    .btn-link {
      border: 2px solid #00483d;
    }
  }
`;
