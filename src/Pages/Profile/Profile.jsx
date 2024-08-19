import React, { useEffect, useState } from 'react'
import { getUserDetailApi } from "../../services/Account";
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { listHeader } from '../../constant';
import Header from '../../Component/Header/Header';
import Social from "../../common/Social";


const Profile = () => {
  //! Props
  //! State
  const [ productData, setProductData ] = useState("")
  const { refetch, data } = useQuery({
    queryKey: ["user-data"],
    queryFn: () => getUserDetailApi(localStorage.getItem("userId")),
    enabled: true,
    onSuccess: (response) => { 
      console.log("checked",response);
      setProductData(response?.data);
    },
  });
  //! Function
  //! Effect
  useEffect(() => {
    refetch && refetch();
  }, [])
  //! Render
  return (
    <div className="profile-container">
    <div>
      <Social />
    </div>
  </div>
  )
}

export default Profile

export const SWrapProfile = styled.div`
.profile-container{
  display: flex;
  flex-direction: column-reverse;
  color: black;
  // align-items: center;
}
`