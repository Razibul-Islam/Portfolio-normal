import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_92q9b0e",
        "template_8ofljr3",
        form.current,
        "1maGvis05z601l6ak"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="contact-form" id="contact">
      <div data-aos="fade-right" className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blue s-blue1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div data-aos="fade-left" className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="User_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="User_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
