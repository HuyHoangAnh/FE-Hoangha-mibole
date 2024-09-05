import React, { useState, useEffect } from "react";
import axios from "axios";
import * as APIEndPoint from "../services/apiEndPoint.jsx";

const Search = () => {
  //! State
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //! Function
  const searchAPI = async () => {
    if (!name) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8000${APIEndPoint.API_PRODUCT}?q=${name}`
      );
      setResults(response.data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  //! Effect
  useEffect(() => {
    if (name.length > 2) {
      const delayDebounceFn = setTimeout(() => {
        searchAPI();
      }, 500);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [name]);

  //! Render
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search..."
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {/* <ul>
        {results?.data?.map((item, index) => (
          <li key={index}>{item.productName}</li>
        ))}
      </ul> */}
      <ul>
        {results?.data
          ?.filter((item) =>
            item.productName.toLowerCase().includes(name.toLowerCase())
          )
          .map((item, index) => (
            <li key={index}>{item.productName}</li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
