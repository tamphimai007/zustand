import React, { useEffect } from "react";
import useStore from "../store/tam-store";
const Section5 = () => {
  const { data, isLoading, error, errorMsg, getData } = useStore((state) => ({
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
    errorMsg: state.errorMsg,
    getData: state.getData,
  }));
  console.log(data, isLoading, error, errorMsg);

  const fetchData = () => {
    getData();
  };

  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div>
      Section5
      <button onClick={fetchData}>Get data</button>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : error ? (
        <p>{errorMsg}</p>
      ) : (
        data.map((item, index) => <li key={index}>{item.name}</li>)
      )}
    </div>
  );
};

export default Section5;
