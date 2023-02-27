import React from "react";
import student from "../../assets/student.png";
import "./programs.css";

const Programs = () => (
  <div className="tuh__programs section__padding" id="program">
    <div className="tuh__programs-image">
      <img src={student} alt="program" />
    </div>
    <div className="tuh__programs-content">
      <h4>Minta Akses Awal untuk Memulai</h4>
      <h1 className="gradient__text">Jadi Mapres dan Hasilkan Uang dari Project</h1>
      <p>
        Dengan mengeksplorasi dari Afaan Tuh, kamu telah menjadi mahasiswa yang berilmu dan mampu menebar manfaat dengan ilmu yang kamu punya. Cara yang nyaman untuk belajar di luar kelas. Terlibat langsung dalam project dan menjadi Fresh
        Graduate yang berpengalaman
      </p>
      <h4>Minta Akses Awal untuk Memulai</h4>
    </div>
  </div>
);

export default Programs;
