import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";

import "../styles/Home.css"

function Home() {
  return (
  <div className="home">
    <div className="about">
        <h2>Hello Meu Nome é Fernando "Chagas"</h2>
      <div className="prompt">
          <p>
            Sou Programador e desenvolvedor, passo o tempo estudando e praticando as tecnologias para melhorar a vida das pessoas!
          </p>
          <a href="https://www.linkedin.com/in/fernando-chagas-216860127/" target='_blank' rel="noreferrer">
            <LinkedInIcon  />
          </a>
          <a href="https://github.com/xchagasx" target='_blank' rel="noreferrer">
          <GithubIcon />
          </a>
      </div>
    </div>
      <div className="skills">
        <h1> skills </h1> 
        <ol className="list">
          <li className="item">
            <h2> Front-End </h2>
            <span>
              HTML, CSS, React, NPM, BootStrap, Yarn;
            </span>
          </li>
          <li className="item">
            <h2> Back-End </h2>
            <span>
              NodeJs, ExpressJs, MySQL
            </span>
          </li>
          <li className="item">
            <h2> Languages </h2>
            <span>
              JavaScript and TypeScript
            </span>
          </li>
        </ol>
    </div>
  </div>
  );
}

export default Home;