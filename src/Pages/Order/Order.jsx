import React, { useEffect, useState } from 'react'
import { getOrderApi } from '../../services/Order';
import { useQuery } from '@tanstack/react-query';

const Order = () => {
    //! Props
  const [allOrderData, setAllOrderData] = useState("");
  //! Function
  const { refetch, data } = useQuery(
    ["get-order-data"],
    () => getOrderApi(localStorage.getItem("token")),
    {
      enabled: false,
      onSuccess: (response) => {
      },
    }
  );

    //! Function
    //! Effect
    useEffect(() => {
        refetch && refetch();
    }, [])
    //! Render
  return (
    <div>Order</div>
  )
}

export default Order