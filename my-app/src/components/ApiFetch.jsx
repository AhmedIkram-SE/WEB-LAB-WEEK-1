import { useState, useEffect } from "react";

const ApiFetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetch(
        "https://usman-fake-api.herokuapp.com/api/products"
      );
      const jsonData = await apiData.json();
      setData(jsonData);
    };
    fetchData();
  }, [setData]);

  return (
    <>
      <h1>Calling from Api</h1>
      <ul>
        {data.map((item) => (
          <li>{item.name} </li>
        ))}
      </ul>
    </>
  );
};
export default ApiFetch;
