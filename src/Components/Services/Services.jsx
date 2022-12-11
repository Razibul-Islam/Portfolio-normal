import React from "react";
import "./Services.css";
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* Left Side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
          <br />
          esse provident tenetur laboriosam molestiae neque?
        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right Side */}
      <div className="cards">
        {/* First Cart */}
        <div data-aos="zoom-in-up" style={{ left: "14rem" }}>
          <Card
            emoji={Heartemoji}
            heading={"Design"}
            details={"Figma, Sketch, PhotoShop, Adobe, Adobe xd"}
          />
        </div>
        {/* Second Cart */}
        <div data-aos="zoom-in-rigth" style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            details={"HTML, CSS, Javascript, React,Node,MongoDB"}
          />
        </div>
        {/* Third Cart */}
        <div data-aos="zoom-in-left" style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            details={
              "lorem ispum dummy text are usually use in section where we need some random text"
            }
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
