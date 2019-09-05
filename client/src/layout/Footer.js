import React from "react";

import { Button } from "@blueprintjs/core";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" align="center">
      <div className="bp3-dark">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/sanderdsz/sander-curriculum"
        >
          <Button
            href="#"
            className="footer-icons"
            title="Github"
            icon="code"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sanderdsz.github.io/index.html"
        >
          <Button
            className="footer-icons"
            title="Website"
            icon="globe-network"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/sandersz/"
        >
          <Button className="footer-icons" title="LinkedIn" icon="user" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
