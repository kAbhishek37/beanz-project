import React, { useState, useEffect } from "react";
import CardComponent from "../components/cardcomponent";
import ExploreImageButton from "../components/exploreimagebutton";
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
          <ExploreImageButton
            value={data.exploreimagebutton}
          ></ExploreImageButton>
          <CardComponent value={data.cardcomponent}></CardComponent>
        </div>
      ) : (
        <h1 className="text-center">Unable to fetch Shop Coffee</h1>
      )}
    </>
  );
}

export default ShopCoffee;
