import { useState, useEffect } from "react";
import leftArrow from "../images/leftArrow.png";
import rightArrow from "../images/rightArrow.png";

const Carousel = ({ images, images_content }) => {
  const [activeImg, setActiveImg] = useState((images.length - 1) / 2);
  const [items, setItems] = useState(images);
  const [ishover, setIshover] = useState(false);

  const rightClick = () => {
    const newItems = [...items];

    const firstElement = newItems.shift();
    newItems.push(firstElement);

    setItems(newItems);
    setActiveImg((preactiveImg) => (preactiveImg + 1) % 5);
  };

  const leftClick = () => {
    const newItems = [...items];

    const lastElement = newItems.pop();
    newItems.unshift(lastElement); //adding last Element to the begining

    setItems(newItems);
    setActiveImg((preactiveImg) => (preactiveImg - 1 + 5) % 5);
  };

  const OpenHover = () => {
    setIshover(true);
  };
  const closeHover = () => {
    setIshover(false);
  };

  return (
    <div style={{ gridRowStart: "4", gridRowEnd: "16", display: "grid" }}>
      {/* Images */}
      <div style={{ gridRowStart: "1", gridRowEnd: "5" }}>
        <div
          className="gallery-container"
          style={{
            alignItems: "center",
            display: "flex",
            height: "100%",
            margin: "0 auto",
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {items.map((item, index) => (
            <img
              className={`gallery-item gallery-item-${index + 1}`}
              src={item}
              alt="#"
              onMouseOver={OpenHover}
              onMouseOut={closeHover}
            />
          ))}
          <div
            className={`${ishover ? "img_text" : "hide_text"}`}
            onMouseOver={OpenHover}
            onMouseOut={closeHover}
          >
            {images_content[activeImg]}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div
        className="gallery-controls"
        style={{
          gridRowStart: "5",
          gridRowEnd: "6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <img
            src={leftArrow}
            alt="#"
            onClick={leftClick}
            style={{ cursor: "pointer" }}
          />
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`dots ${activeImg === index ? "active-dots" : ""}`}
              ></div>
            ))}
          </div>
          <img
            src={rightArrow}
            alt="#"
            onClick={rightClick}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
