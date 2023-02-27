import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="tuh__blog section__padding" id="blog">
    <div className="tuh__blog-heading">
      <h1 className="gradient__text">Pelajari Mata Kuliah Terpopuler.</h1>
    </div>
    <div className="tuh__blog-container">
      <div className="tuh__blog-container_groupA">
        <Article imgUrl={blog01} sks="12 pertemuan, 3 sks" text="Analisis Sistem dan Pengambilan Keputusan" />
      </div>
      <div className="tuh__blog-container_groupB">
        <Article imgUrl={blog02} sks="12 pertemuan, 3 sks" text="Algoritma Pemrograman" />
        <Article imgUrl={blog03} sks="12 pertemuan, 3 sks" text="Manajemen Rantai Pasok dan Pergudangan" />
        <Article imgUrl={blog04} sks="12 pertemuan, 3 sks" text="Perancangan Proyek Industri" />
        <Article imgUrl={blog05} sks="12 pertemuan, 3 sks" text="Riset Operasi" />
      </div>
    </div>
  </div>
);

export default Blog;
