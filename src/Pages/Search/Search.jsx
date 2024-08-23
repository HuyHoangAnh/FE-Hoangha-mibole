import React from 'react'

const Search = () => {
  //! Props
  //! State
  const [productData, setProductData] = useState("");
  //! Function
  const { refetch, data } = useQuery({
    queryKey: ["get-product-data"],
    queryFn: getProductApi,
    enabled: false,
    onSuccess: (response) => {
      setProductData(response?.data);
    },
  });
  //! Effect
  useEffect(() => {
    refetch && refetch();
  }, []);
  //! Render
  return (
    <div>Search</div>
  )
}

export default Search