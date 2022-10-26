import React from "react";
import "./skill.css";
import InconReact from "../img/blackReact.png";
import Ang from "../img/angular.png";
import Html5 from "../img/html.png";
import dotnet from "../img/dotnet.png";
import css from "../img/css.jpg";
import csharp from "../img/c.png";
import sql from "../img/sql.png";
import mssql from "../img/mssql.png";
import dapper from "../img/dapper.png";
import api from "../img/api.png";
import g from "../img/g.png";
import java from "../img/java.png";
import boot from "../img/boot.jpg";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="s-tittle">Technical Skills</h1>
      <div className="s-container">
        <div className="s-list">
          <h3 className="s-list-tittle">Front End Technologies</h3>
          <div className="s-list-items">
            <img src={InconReact} alt="" className="s-img" />
            <span className="s-name">React Js</span>
          </div>
          <div className="s-list-items">
            <img src={Ang} alt="" className="s-img" />
            <span className="s-name">Angular 14</span>
          </div>
          <div className="s-list-items">
            <img src={Html5} alt="" className="s-img" />
            <span className="s-name">Html</span>
          </div>
          <div className="s-list-items">
            <img src={css} alt="" className="s-img" />
            <span className="s-name">css</span>
          </div>
          <div className="s-list-items">
            <img src={boot} alt="" className="s-img" />
            <span className="s-name">Bootstrap 5</span>
          </div>
        </div>
        <div className="s-list">
          <h3 className="s-list-tittle">Backend Technologies</h3>
          <div className="s-list-items">
            <img src={dotnet} alt="" className="s-img" />
            <span className="s-name">Asp.Net/core</span>
          </div>
          <div className="s-list-items">
            <img src={csharp} alt="" className="s-img" />
            <span className="s-name">C#</span>
          </div>
          <div className="s-list-items">
            <img src={api} alt="" className="s-img" />
            <span className="s-name">Web Api</span>
          </div>
          <div className="s-list-items">
            <img src={java} alt="" className="s-img" />
            <span className="s-name">Java</span>
          </div>
          <div className="s-list-items">
            <img src={dapper} alt="" className="s-img" />
            <span className="s-name">Dapper micro ORM</span>
          </div>
        </div>
        <div className="s-list">
          <h3 className="s-list-tittle">Data Base Technologies</h3>
          <div className="s-list-items">
            <img src={sql} alt="" className="s-img" />
            <span className="s-name">SQL Server</span>
          </div>
          <div className="s-list-items">
            <img src={mssql} alt="" className="s-img" />
            <span className="s-name">MSSQL</span>
          </div>
          <div className="s-list-items">
            <img src={g} alt="" className="s-img" />
            <span className="s-name"></span>
          </div>
          <div className="s-list-items">
            <img src={g} alt="" className="s-img" />
            <span className="s-name"></span>
          </div>
          <div className="s-list-items">
            <img src={g} alt="" className="s-img" />
            <span className="s-name"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
