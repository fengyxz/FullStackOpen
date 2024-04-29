import React, { useState } from "react";
import axios from "axios";

export const Country = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(0);
  const BASE_URL = "https://restcountries.com/v3.1/name";

  const queryCountry = (keyword) => {
    const request = axios.get(`${BASE_URL}/${keyword}`);
    request
      .then((res) => {
        const size = res.data.length;
        setNumber(size);
        if (size <= 10) {
          setData(data);
        } else {
          setData([]);
        }
        console.log(data);
      })
      .catch((err) => {
        console.error("cannot found");
      });
  };
  return (
    <div>
      <div>
        find countries:
        <input
          onChange={(e) => {
            console.log(e.target.value);
            queryCountry(e.target.value);
          }}
        />
      </div>
      <div>
        <Result number={number} data={data} />
      </div>
    </div>
  );
};

const Result = ({ number, data }) => {
  console.log("num", number, "data", data);
  if (number > 10) {
    console.log("hhhhh");
  }
  if (number === 0) return <div>No result found</div>;
  if (number === 1) return <div>one result</div>;
  if (number > 10) {
    console.log("10");
    return <div>Too many matches, specify another filter</div>;
  }
  return (
    <>
      {/* {data.?.map((country) => (
        <div>{country.name.common + country.flag}</div>
      ))} */}
    </>
  );
};
