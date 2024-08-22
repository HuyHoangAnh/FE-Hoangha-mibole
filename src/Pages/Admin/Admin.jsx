import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllUserApi } from "../../services/Account";
import { getProductApi } from "../../services/Product"
import ModalUser from "../../Component/Modal/ModalUser";

const Admin = () => {
  //! Props
  //! State
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [allUserData, setAllUsertData] = useState("");
  const { refetch, data } = useQuery({
    queryKey: ["all-user-data"],
    queryFn: getAllUserApi,
    enabled: true,
    onSuccess: (response) => {
      setAllUsertData(response?.data);
    },
  });
  const [productData, setProductData] = useState("");
  const { refetch: refetchProduct } = useQuery({
    queryKey: ["all-product-data"],
    queryFn: getProductApi,
    enabled: true,
    onSuccess: (response) => {
      setProductData(response?.data?.data);
    },
  });
  //! Function
  //! Effect
  useEffect(() => {
    refetch && refetch();
  }, []);
  useEffect(() => {
    refetchProduct && refetchProduct();
  }, []);
  //! Render
  return (
    <SWarpAdmin>
    <ModalUser isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} allUserData={allUserData}/>
      <div className="container">
        <div className="form">
          <h1 className="text-4xl">Thông tin khách hàng</h1>
          <ul role="list" class="divide-y divide-gray-100">
          {allUserData?.data?.map((el) => {
            return(
              <li class="flex justify-between gap-x-6 py-5">
              <div class="flex min-w-0 gap-x-4">
                <img
                  class="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAKlBMVEXT09P+/v7Q0NDW1tbf39/4+Pj7+/vs7Ozv7+/a2trz8/Po6Ojj4+PMzMymzRIKAAAEaElEQVR4nO2dyZbjIAxFbcADQ///7zbESWWwk3iQeHKO7qpO1cavEUISQt00iqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoazBNYxvrL+Qf0J9zhKwixWEM3YUwDik5f0pF3sUh9O0LfRii8+hv24RpXAzdq5AbXYiuGOApMDaNb5Vc9YzpJOaW5tY1pw8J/Z3fMW6NlEmOk25r4zolE6PkrWPcFikFuYtjh61a2naQ6QiMD9u1tG3wEhfHfXHH7+gc+svnpJ1ashppTtqklQ55iV6WGuMOaMlqJDk14w9pyWoEeQF7UEtWI8ZD/9u99+90/9AqJsyOs3LOIMPQEoWWthXh0iyBkRU6AduGxsgKeEM7eMI8IuC02ZTAfGYESzkUxrzSJ/DSEC4MemkId0wBvGvIXNnEgNTiic6YGx2y2El0+N8BhgGWdPsXRlwYQG1lUDvbXCb7Dq66EenFRJiYXYWyzwSYGNIT8wpKi2fQ0qI8AMP+x3kA4lhmAhTR0OWYj4yYWNMwOLPszkBiyM//QqdiVMyTGI4zs+11ZVTMkxjy1KyAOmcYMoCcA4DEkFcACqhC4E9FzZZDDKyiwXDQ9CgttIXmCVy5mcED4KqADB4AVzez5BlNAF5skh+buLJZ09Bez5QLGqCYff1y7wnQ/m1if4a0Mup7AOhdU0NcO4PeAja0S4NeGNKkBpTKPEDVBySiE4isRwPen3FRQxQ7g5L/F2gMrbMixGx/zrAEvj9rgsKj4T3ZH4ePTvRx+YA5mkADGzMWOBY+Y4PlOUeSTmR6ucz+piBZNnZlpxcQtPcf2fMeqMPmY+8xbvPGEfxW09hhU9TZDzJimGVM4zb4gVH6e21j00pbC0nystxYJSec5dl5DgjGj3unH4Ud+d94vzwhCd8qc4xpfAz90wr1fYi+/OWEmIz1KcYhE2PytvwG/VXHMFfQ36EoiqL8GOVksfY6Ecz7/OP1l2cja3BxfJ0+1YUxOmdPEzCXf3vvPo6e6sbk/BmWKCtJw4rCRjck6XpynjmsLmqEQXKuaUrMv1ZKoWQEMuUYu8a85uYmcXVs3DveKEpzbmbvpKaLHAlXs3eONp5JugcgaAcSMdukoXrhLOJi49BueaQTUEOnG6IBnwy2sez/RQ12QOCekYafQKr5qVZgjlfnKC/A8+gUIoXnAS1mbXhenBXqN57xPDjL9IAOJ+rG+Sc9dZvoDf2Qlke6qvkn/fScZ6pGnVwb5o+KTSi8RlaoaGjMRlaoZmgsL2dfqZQP0DXMf6JSMz377p+o4gOOjwBeR41BwWxxzIwaS1NLS4U32/UWpkLAyTPSZBnuQSc0LzLWwlxJ40ovl+FOOitaGfekA9IhwCtgveuoa2XMdlYnLLvDGaDVtjLW5448g/M+wTnEvfKW4axvMtdkluBLn8kuyTaIYQsCagaZN/iCzer7n/MRV4WqzCts447oL8q+w3aVVt+Z8b1HBTgzPnf2Y2IqR2YFrv+RonqYySpG/Mr8B2O5OnI1m+QvAAAAAElFTkSuQmCC"
                  alt=""
                />
                <div class="min-w-0 flex-auto">
                  <p class="text-sm font-semibold leading-6 text-gray-900">
                    {el?.name ? el?.name : "Chưa xác định"}
                  </p>
                  <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                    {el?.email ? el?.email : "Chưa xác định"}
                  </p>
                </div>
              </div>
              <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <button onClick={() => {
                  localStorage.setItem("checkIdUser",el?._id)
                  setIsOpenModal(true)}} class="text-sm leading-6 text-gray-900">Thông tin chi tiết</button>
                {/* <p class="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
                </p> */}
              </div>
            </li>
            )
          })}
          </ul>
        </div>
      </div>
    </SWarpAdmin>
  );
};

export default Admin;

export const SWarpAdmin = styled.div`
  color: #000;
  .container {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    .form{
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;
