import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Razibul Islam</span>
          <span>
            FrontEnd Developer with high level of Experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <a
          href="https://drive.google.com/uc?id=1L_Aq3MVXuPTuPlbnRB9hP-B1wJOSAKiU&export=download"
          download={true}
        >
          <button className="i-button button">Download CV</button>
        </a>
        <div className="i-icons">
          <a href="https://github.com/Razibul-Islam">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/razibul-islam-668a87259/">
            <img src={Linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/razibul.islam.014/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <img data-aos="zoom-in-left" src={glassesimoji} alt="" />
        <div
          data-aos="fade-left"
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </div>
        <div
          data-aos="fade-up-right"
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Best" txt2="Design" />
        </div>
        {/* Blur Div */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
