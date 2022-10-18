import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FetchJsonData from "../components/utils";
import "../cssofcomponents/productcard.css";

function SearchComponent() {
  const [search] = useSearchParams();
  const { REACT_APP_HOST_URL, REACT_APP_PORT, REACT_APP_COFFEE_PATH_URL } =
    process.env;
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState(search.get("search"));
  // console.log(keyword);

  const getData = () => {
    FetchJsonData(
      REACT_APP_HOST_URL,
      REACT_APP_PORT,
      REACT_APP_COFFEE_PATH_URL
    ).then((promiseData) => {
      setData(Object.values(promiseData.shopcards.cardmultifield));
    });
  };

  var obj = [];
  Object.keys(data).map(function (item) {
    obj = data[item];
  });

  const filterCom = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {data !== null ? (
        <div className="row container-fluid">
          <div className="col-sm-2 mt-5 pt-3 ml-5 mb-5">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control shopsearchinut mr-sm-2"
                type="search"
                value={keyword !== null ? keyword : ""}
                onChange={filterCom}
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>

          <div className="scardcontainer col-sm-9 mt-5">
            {keyword !== null && keyword !== "" && (
              <h2 className="titlerightdiv">
                {data.length} Beanz For '{keyword}'
              </h2>
            )}
            {Object.keys(data)
              .filter((user) => {
                if (keyword !== "" && keyword !== null) {
                  if (
                    data[user].title
                      .toLowerCase()
                      .includes(keyword.toLowerCase())
                  ) {
                    return data[user];
                  }
                } else {
                  return data[user];
                }
              })
              .map((newItem) => {
                return (
                  <div key={data[newItem].title} className="scardeachcard">
                    <div className="scardimage">
                      <img
                        src={data[newItem].linkURL}
                        width="90%"
                        height="250px"
                      />
                    </div>
                    <div className="scarddownstyle">
                      <p className="scardbrand">{data[newItem].cardbrand}</p>
                      <p className="scardtitle">{data[newItem].title}</p>
                      <p className="scardsubtitle">{data[newItem].subtitle}</p>
                      <p className="scardprice">{data[newItem].cardprice}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <h1 className="text-center">Unable to fetch Cards</h1>
      )}
    </>
  );
}

export default SearchComponent;
