import React from "react";
import { Callout } from "@blueprintjs/core";

import "./About.css";

const About = () => {
  return (
    <div className="about-background">
      <div className="about-callout">
        <Callout>This project is a simple contact list.</Callout>
      </div>
    </div>
  );
};

export default About;
