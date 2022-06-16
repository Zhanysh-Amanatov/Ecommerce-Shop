import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { BsPaypal } from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="content">
      <div className="grid-container">
        <div className="section">
          <Link to="/" className="linkFooter">
            ABOUT US
          </Link>
          <Link to="/" className="linkFooter">
            OUR CONTACTS
          </Link>
          <Link to="/" className="linkFooter">
            DELIVERY OPTIONS
          </Link>
        </div>
        <div className="section">
          <div className="socialMediaIcons">
            <a
              href="https://instagram.com/zhanysh.amanatov"
              rel="noreferrer"
              target="_blank"
              className="linkFooter"
            >
              <FaInstagram />
            </a>
            <a
              href="https://telegram/zhanysh.amanatov"
              rel="noreferrer"
              target="_blank"
              className="linkFooter"
            >
              <FaTelegramPlane />
            </a>
          </div>
          <p>SUBSCRIBE TO OUR NEWSLETTER</p>
          <div className="emailButtonInput">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="inputEmail"
            />
            <button type="submit" className="inputButton">
              <AiOutlineSend className="sendLogo" />
            </button>
          </div>
        </div>
        <div className="section">
          <p>PAYMENT METHODS</p>
          <div className="paymentLogos">
            <FaCcVisa className="visaLogo" />
            <FaCcMastercard className="mastercardLogo" />
            <BsPaypal className="paypalLogo" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <AiOutlineCopyright /> COPYRIGHT 2022
      </div>
    </div>
  );
};

export default Footer;
