import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllUserApi } from "../../services/Account";
import { getProductApi } from "../../services/Product";

const Admin = () => {
    //! Props
    //! State
    const [allUserData,setAllUsertData] = useState("")
    const { refetch, data } = useQuery({
        queryKey: ["product-data"],
        queryFn: getAllUserApi,
        enabled: true,
        onSuccess: (response) => { 
          setAllUsertData(response?.data?.data);
        },
      });
      const [ productData, setProductData ] = useState("")
      const { refetch: refetchProduct } = useQuery({
        queryKey: ["product-data"],
        queryFn: getProductApi,
        enabled: true,
        onSuccess: (response) => { 
          setProductData(response?.data?.data);
        },
      });
    //! Function
    //! Effect
    useEffect(() => {
        refetch && refetch()
    },[])
    useEffect(() => {
        refetchProduct && refetchProduct()
    },[])
    //! Render
    console.log("checked", productData);
    
  return (
    <SWarpAdmin>
      <div className="container">Admin</div>
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
  }
`;
