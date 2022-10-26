import React from "react";
import { useRef } from "react";
import "./contact.css";
import { useState } from "react";
import Phone from "../img/phone.png";
import Addres from "../img/address.png";
import Email from "../img/email.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../context";
import { useContext } from "react";

export const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_crxzrc8",
        "template_1kksq4a",
        formRef.current,
        "b3NYF4GlZVspehfT4"
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

  return (
    <div className="c">
      <div className="c-bg">
        <div className="c-wrapper">
          <div className="c-left">
            <div className="c-bg-in"></div>
            <div className="c-title">Please Contact me</div>
            <div className="c-info">
              <div className="c-info-itrm">
                <img src={Phone} alt="" className="c-img" />
                +91 9573025605
              </div>
              <div className="c-info-itrm">
                <img src={Email} alt="" className="c-img" />
                nimmalamahesh361@gmail.com
              </div>
              <div className="c-info-itrm">
                <img src={Addres} alt="" className="c-img" />
                Madhapur, Hyderabad,500081,Telangana
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              Fill the form and submit to send a meassage to me.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                style={{ backgroundColor: darkMode && "#333" }}
                rows="5"
                placeholder="Message"
                name="message"
              />
              <button>Submit</button>
              {done && "Thank you..."}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
