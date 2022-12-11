import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { useContext } from "react";
import { themeContext } from "../../Context";


const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works For All These
        </span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
          <br />
          esse provident tenetur laboriosam molestiae neque?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
          <br />
          esse provident tenetur laboriosam molestiae
        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="w-secCircle"
          >
            <img src={Upwork} alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="w-secCircle"
          >
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="w-secCircle"
          >
            <img src={Shopify} alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="w-secCircle"
          >
            <img src={Facebook} alt="" />
          </div>
        </div>
        {/* Background Circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
