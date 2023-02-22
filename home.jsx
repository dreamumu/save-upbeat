import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="container">
      <header id="hex-grid">
        <div className="light"></div>
        <div className="grid">
        <div className="button">
          <p
            style={{
              fontFamily: "Bungee",
              fontSize: "10em",
              color: "#fff",
            }}
          >
            UPBEAT
          </p>
         
            <a href="#" style={{ "--clr": "#ff1867" }}>
              <span style={{ fontFamily: "Bungee" }}>START</span>
              <i></i>
            </a>
            <a href="#" style={{ "--clr": "#ff1867" }}>
              <span style={{ fontFamily: "Bungee" }}>how to play</span>
              <i></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
