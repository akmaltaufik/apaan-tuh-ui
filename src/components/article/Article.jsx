import React from "react";
import "./article.css";

const Article = ({ imgUrl, sks, text }) => (
  <div className="tuh__blog-container_article">
    <div className="tuh__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="tuh__blog-container_article-content">
      <div>
        <p>{sks}</p>
        <h3>{text}</h3>
      </div>
      <p>Ambil Mata Kuliah</p>
    </div>
  </div>
);

export default Article;
