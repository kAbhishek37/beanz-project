import React, { useState, useEffect } from "react";
import "./App.css";
import TopNav from "./components/topnav";
import ExploreImageButton from "./components/exploreimagebutton";
import Heading from "./components/heading";
import HowItWork from "./components/howitwork";
import YourFavoriteBean from "./components/yourfavoritebean";
import CardComponent from "./components/cardcomponent";
import Coffee from "./components/coffee";
import EmailNotification from "./components/emailnotification";
import Footer from "./components/footer";

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch(
      "http://localhost:4503/secondprojectdemo/bin/api/content/v4?page=home-page",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        //console.log(response.text());
        return response.json();
      })
      .then(function (myJson) {
        //console.log(myJson);
        //console.log(JSON.parse(JSON.stringify(myJson)));
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      {console.log(data)}
      <TopNav />
      {Object.keys(data).map((key, index) => {
        //console.log(key);

        if (key === "exploreimagebutton") {
          return (
            console.log(data[key]),
            (
              <ExploreImageButton
                key={index}
                value={data[key]}
              ></ExploreImageButton>
            )
          );
        } else if (key === "heading") {
          return (
            console.log(data[key]),
            (<Heading key={index} value={data[key]}></Heading>)
          );
        } else if (key.includes("howitwork")) {
          return (
            console.log(data[key]),
            (<HowItWork key={index} value={data[key]}></HowItWork>)
          );
        } else if (key.includes("yourfavoritebean")) {
          return (
            console.log(data[key]),
            (
              <YourFavoriteBean
                key={index}
                value={data[key]}
              ></YourFavoriteBean>
            )
          );
        } else if (key.includes("cardcomponent")) {
          return (
            console.log(data[key]),
            (<CardComponent key={index} value={data[key]}></CardComponent>)
          );
        } else if (key.includes("coffee")) {
          return (
            console.log(data[key]),
            (<Coffee key={index} value={data[key]}></Coffee>)
          );
        } else if (key.includes("emailnotification")) {
          return (
            console.log(data[key]),
            (
              <EmailNotification
                key={index}
                value={data[key]}
              ></EmailNotification>
            )
          );
        }
      })}
      <Footer />
    </div>
  );
}

export default App;
