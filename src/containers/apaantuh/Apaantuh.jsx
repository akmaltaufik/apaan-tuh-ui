import React from "react";
import Feature from "../../components/feature/Feature";
import "./apaantuh.css";

const Apaantuh = () => (
  <div className="tuh__apaantuh section__margin" id="apaantuh">
    <div className="tuh__apaantuh-feature">
      <Feature
        title="Afaan Tuh??!"
        text="ini library 4.0 buat lu yang lagi ngampus yang pengen jadi mahasiswa ambis. Kumpulan mata kuliah yang disajikan dengan penyampaian menarik dan mudah dipahami dari dosen-dosen milenial yang cocok dengan gaya kamu. Transformasi kuliah 4.0 yang bikin kamu jadi ga salah pilih jurusan"
      />
    </div>
    <div className="tuh__apaantuh-heading">
      <h1 className="gradient__text">Mau Serius Kuliah Tapi Kuliah Berasa Salah Jurusan</h1>
      <p>Explore the Library</p>
    </div>
    <div className="tuh__apaantuh-container">
      <Feature title="Knowledgebase" text="Mata kuliah dari berbagai jurusan yang bisa kamu akses sesuai minat kamu" />
      <Feature title="Project Case" text="Kumpulan project dari perusahaan dengan level kebutuhan mahasiswa yang bisa kamu kerjakan untuk mengasah skill dan menambah CV kamu serta menghasilhan uang sesuai dengan konsentrasi jurusan kamu" />
      <Feature title="Practical Class" text="Praktikum yang bisa kamu ikuti untuk menerapkan ilmu teori yang telah kamu pelajari" />
    </div>
  </div>
);

export default Apaantuh;
