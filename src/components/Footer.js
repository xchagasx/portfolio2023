import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { GitHub } from "@material-ui/icons";

function footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/xchagasx" target='_blank' rel="noreferrer">
          <GitHub />
        </a>
        <a href="https://www.linkedin.com/in/fernando-chagas-216860127/" target='_blank' rel="noreferrer">
          <LinkedInIcon />
        </a>
      </div>

      <button className="btn">
        <Link className="links-btn" to="Contact">Contact Me</Link>
      </button>
      <p> &copy; 2023 DevChagas - Source "PedroTech"</p>
    </div>

  ) 
}

export default footer;