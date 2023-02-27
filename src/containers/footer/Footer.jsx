import React from "react";
import gpt3Logo from "../../assets/apaantuh.png";
import "./footer.css";

const Footer = () => (
  <div className="tuh__footer section__padding">
    <div className="tuh__footer-heading">
      <h1 className="gradient__text">Lu orangnya asik banget kalo join ngab</h1>
    </div>

    <div className="tuh__footer-btn">
      <p>Minta Akses Awal</p>
    </div>

    <div className="tuh__footer-links">
      <div className="tuh__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>
          Bogor, Indonesia <br /> All Rights Reserved
        </p>
      </div>
      <div className="tuh__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="tuh__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="tuh__footer-links_div">
        <h4>Get in touch</h4>
        <p>Bogor, Indonesia</p>
        <p>+62 822 XXXX XXXX</p>
        <p>taufikakmal.ta17@gmail.com</p>
      </div>
    </div>

    <div className="tuh__footer-copyright">
      <p>@2023 Afaan Tuh. Founded By Taufik Akmal.</p>
    </div>
  </div>
);

export default Footer;
