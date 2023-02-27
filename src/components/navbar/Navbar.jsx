import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/apaantuh.png";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="tuh__navbar">
      <div className="tuh__navbar-links">
        <div className="tuh__navbar-links_logo">
          <img src={logo} alt="Afaan Tuh" />
        </div>
        <div className="tuh__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#apaantuh">AFAAN TUH</a>
          </p>
          <p>
            <a href="#belajar">Belajar</a>
          </p>
          <p>
            <a href="#program">Program</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="tuh__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="tuh__navbar-menu">
        {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="tuh__navbar-menu_container scale-up-center">
            <div className="tuh__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#apaantuh">AFAAN TUH</a>
              </p>
              <p>
                <a href="#belajar">Belajar</a>
              </p>
              <p>
                <a href="#program">Program</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>
            <div className="tuh__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
