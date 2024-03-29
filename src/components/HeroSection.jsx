import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./heroSection.css";
import HeroVideo from "../assets/videos/video-ph-1.mp4";
import Image from "../assets/images/img-1.jpg";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={HeroVideo} autoPlay loop muted />
      {/* <img src={Image} /> */}
      <h2>Hello World!</h2>
      <p>Can I have some pizza?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn-large"
        >
          Donate Pizza
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn-large"
        >
          No Pizza? <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
