import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Meningkatkan pengetahuan secara aktual",
    text: "Wadah untuk memahami arti pembelajaran yang sedang kamu lakukan dan disampaikan dengan sederhana dan menantang dan juga sarana bagi kamu yang ingin mengejar IPK 4.0",
  },
  {
    title: "Pengalaman kerja sesuai jurusan",
    text: "Temukan project dan permasalahan nyata pada dunia kerja yang sesuai dengan konsentrasi kamu, learning by doing pada project yang diberikan",
  },
  {
    title: "Komunitas mahasiswa Indonesia",
    text: "Ikuti komunitas yang terdiri dari berbagai angkatan dan perluas relasi kamu dengan aktif mengikuti forum diskusi dan komunitas kami",
  },
  {
    title: "Menjadi mahasiswa kredibel",
    text: "Buktikan diri kamu sebagai sumberdaya yang kapabel dengan telah menyelesaikan tugas dan project yang diberikan serta menghasilkan output yang memuaskan bagi perusahaan",
  },
];

const Features = () => (
  <div className="tuh__features section__padding" id="belajar">
    <div className="tuh__features-heading">
      <h1 className="gradient__text">Cari Tujuan Kamu Kuliah disini dan Jadi Mahasiswa yang Unggul Menghadapi Revolusi Industri 4.0</h1>
      <p>Minta Akses Awal untuk Memulai</p>
    </div>
    <div className="tuh__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
