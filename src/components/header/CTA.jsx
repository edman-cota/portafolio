import React from "react";
import CV from "../../assets/Portafolio.pdf";

const CTA = () => (
  <div className="cta">
    <a href={CV} download className="btn">
      Download CV
    </a>
    <a href="#contact" className="btn btn-primary">
      Let&apos;s Talk
    </a>
  </div>
);
export default CTA;
