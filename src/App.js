import React from "react";
import { Navbar, CTA } from "./components/";
import { Header, Apaantuh, Features, Programs, Blog, Footer } from "./containers/";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Features />
      <Apaantuh />
      <Programs />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
