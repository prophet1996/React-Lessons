import React from "react";
import "./styles.css";
import Nav from "./layout/Nav.jsx";
import Main from "./layout/Main.jsx";
import Footer from "./layout/Footer.jsx";
export default function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
