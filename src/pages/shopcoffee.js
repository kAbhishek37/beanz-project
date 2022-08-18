import React, { useState, useEffect } from "react";
import Heading from "../components/heading";
import HowItWork from "../components/howitwork";
import CardComponent from "../components/cardcomponent";
import Coffee from "../components/coffee";
import FetchJsonData from "../components/utils";
function ShopCoffee() {
  const [data, setData] = useState(null);
  const getData = () => {
    FetchJsonData(
      process.env.REACT_APP_HOST_URL,
      process.env.REACT_APP_PORT,
      process.env.REACT_APP_COFFEE_PATH_URL
    ).then((promiseData) => {
      setData(promiseData);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {data !== null ? (
        <div className="App">
          <Heading value={data.heading}></Heading>
          <CardComponent value={data.cardcomponent}></CardComponent>
          <Heading value={data.heading_1}></Heading>
          <Coffee value={data.coffee}></Coffee>
          <Heading value={data.heading_2}></Heading>
          <HowItWork value={data.howitwork}></HowItWork>
        </div>
      ) : (
        <h1 className="text-center">Unable to fetch Shop Coffee</h1>
      )}
    </>
  );
}

export default ShopCoffee;
