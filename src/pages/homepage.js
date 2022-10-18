import React, { useState, useEffect } from "react";
import "../App.css";
import ExploreImageButton from "../components/exploreimagebutton";
import Heading from "../components/heading";
import HowItWork from "../components/howitwork";
import YourFavoriteBean from "../components/yourfavoritebean";
import CardComponent from "../components/cardcomponent";
import Coffee from "../components/coffee";
import EmailNotification from "../components/emailnotification";
import FetchJsonData from "../components/utils";

function HomePage() {
  const [data, setData] = useState(null);
  const getData = () => {
    FetchJsonData(
      process.env.REACT_APP_HOST_URL,
      process.env.REACT_APP_PORT,
      process.env.REACT_APP_HOME_PATH_URL
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
          <Heading value={data.heading}></Heading>
          <HowItWork value={data.howitwork}></HowItWork>
          <YourFavoriteBean value={data.yourfavoritebean}></YourFavoriteBean>
          <Heading value={data.heading_1}></Heading>
          <CardComponent value={data.cardcomponent}></CardComponent>
          {/* <CardComponentTest value={data.cardcomponent}></CardComponentTest> */}
          <Heading value={data.heading_2}></Heading>
          <Coffee value={data.coffee}></Coffee>
          <EmailNotification value={data.emailnotification}></EmailNotification>
        </div>
      ) : (
        <h1 className="text-center">Unable to fetch</h1>
      )}
    </>
  );
}

export default HomePage;
