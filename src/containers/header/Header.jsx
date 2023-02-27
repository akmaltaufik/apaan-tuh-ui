import React from "react";
import people from "../../assets/people.png";
import hero from "../../assets/aiblue.png";
import "./header.css";

const Header = () => (
  <div className="tuh__header section__padding" id="home">
    <div className="tuh__header-content">
      <h1 className="gradient__text">AFAAN TUH ??!</h1>
      <p>
        lu orangnya asik banget bang. Yuk ngopi sembari eksporasi wawasan baru daripada cuman jadi mahasiswa kupu-kupu. Perdalam pengetahuan lu disini. Apaan tuh ? ini library 4.0 buat lu yang lagi ngampus yang pengen jadi mahasiswa ambis.
      </p>

      <div className="tuh__header-content__input">
        <input type="email" placeholder="Alamat Email Kamu..." />
        <button type="button">Ayo Mulai</button>
      </div>

      <div className="tuh__header-content__people">
        <img src={people} alt="people" />
        <p>1,600 orang meminta akses kunjungan dalam 24 jam terakhir</p>
      </div>
    </div>

    <div className="tuh__header-image">
      <img src={hero} alt="hero" />
    </div>
  </div>
);

export default Header;
