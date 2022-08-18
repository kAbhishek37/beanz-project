import React, { useState, Component } from "react";
import "../cssofcomponents/cardcomponent.css";
import Carousel from "react-bootstrap/Carousel";

export default function CardComponent(value) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const multifield = [value.value.multifield];
  console.log(value.value);
  var obj3 = Object.values(multifield[0]);

  let len = obj3.length;
  let itemsArray = [];
  let newArray = [];
  obj3.map((v, i) => {
    if (i === 0) {
      newArray.push(v);
    } else if (i % 8 !== 0 && i !== len - 1) {
      newArray.push(v);
    } else if (i % 8 !== 0 && i === len - 1) {
      newArray.push(v);

      itemsArray.push(newArray);
    } else if (i % 8 === 0 && i === len - 1) {
      itemsArray.push(newArray);

      newArray = [];

      newArray.push("item" + i);

      itemsArray.push(newArray);
    } else {
      itemsArray.push(newArray);

      newArray = [];

      newArray.push(v);
    }
  });
  // console.log(itemsArray);
  return itemsArray.length != 0 ? (
    <div>
      <Carousel
        className=""
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
      >
        {itemsArray.map((oneItem) => (
          <Carousel.Item className="cccon">
            {oneItem.map((newItem) => {
              return (
                <a href={newItem.pageURL} target="blank">
                  <div className="card h-auto m-3 cccard">
                    <img
                      src={newItem.linkURL}
                      className="card-img-top mx-auto ccimage"
                      alt="..."
                    />
                    <div className="card-body ccbody">
                      <h1 className="card-title cctitle">{newItem.title}</h1>
                      <p className="card-text cctext">{newItem.subtitle}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </Carousel.Item>
        ))}
      </Carousel>
      {/* {console.log(value.value.allcardlink)} */}
      <a href={value.value.allcardlink} target="blank">
        {value.value.cardbtntitle && (
          <button className="beanbtn mt-5 mb-5">
            {value.value.cardbtntitle}
          </button>
        )}
      </a>
    </div>
  ) : (
    "Nothing to show"
  );
}
