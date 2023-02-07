import React from "react";
import Typical from "react-typical";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
          <div className="colz-icon">
            <a
              href="https://www.linkedin.com/in/bhaskar-kumar-61a3271b3/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin fa-2x" ></i>
            </a>
            <a
              href="https://github.com/bhaskarkumar1"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-square-github fa-2x"></i>
            </a>
            <a
              href="https://twitter.com/bhaskarkrsingh_"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-square-twitter fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/bhaskar__kumar_singh/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-square-instagram fa-2x"></i>
            </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text"> Bhaskar</span>
            </span>
          </div>
          <div className="profile-details-role">
          <span className="primary-text">

            <h1>
              {" "}
              <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic Dev ⚡",
                  1000,
                  "React-dev 💻",
                  1000,
                  "Full Stack Dev 🌐",
                  1000,
                  "MERN Stack Dev 😎",
                  1000,
                  "DSA 💀",
                  1000,
                  "Java ☕",
                  1000,
                ]}
              />
            </h1>
            <span className="profile-role-tagline">
              knack of building application with Fronted & Backend operations
            </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="mailto: bhaskarkumar.india@gmail.com"   target="_blank" rel="noreferrer">
            <button className="btn primary-btn" >
              {""}
              Hire Me{" "}
            </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1qZez3HvyAMZL_ItJ11Bb-L0HimKOOHkM/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn highlighted-btn" > Get Résumé</button>
            </a>
            
          </div>
        </div>
        <div className="profile-picture">

            <div className="profile-picture-background">

            </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;
