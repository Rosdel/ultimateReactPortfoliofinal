import React, { Component } from "react";
import { useRef, useState } from "react";
import "./App.css";
import Contact from "./Contact";
import Education from "./Education";
import Programming from "./Programming";
import Project from "./Project";
import Testimonials from "./Testimonials";
import Work from "./Work";
import Typed from "typed.js";
import { useEffect } from "react";

function App() {
  const [education, seteducation] = useState(true);
  const [workhistory, setworkhistory] = useState(false);
  const [programmings, setprogrammings] = useState(false);
  const [projects, setprojects] = useState(false);
  const [opennav, setopennav] = useState(false);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Applied Scientist 😎",
        "Software Developer 💻",
        "Java ☕|| Spring Boot",
        "React.js 👓",
        "Data Analytics 📈",
      ],
      startDelay: 0,
      typeSpeed: 80,
      backSpeed: 10,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      autoInsertCss: true,
      // cursorChar: "|",
    });
    return () => {
      typed.destroy();
    };
  }, []);
  const el = useRef(null);
  function SetAllFalse() {
    seteducation(false);
    setworkhistory(false);
    setprogrammings(false);
    setprojects(false);
  }
  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <div className="App">
      <div className="navbar-option-mobile bg-new">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex align-item-center my-3 ">
            &#174; CODING HEROES..!!
          </span>
          <div className="bars mx-5" onClick={() => setopennav(!opennav)}></div>
        </div>
      </div>

      <nav
        className={
          !opennav
            ? "d-flex flex-rows navbar-new bg-new px-9 py-5 transition-all"
            : "d-flex flex-rows navbar-fixed-new bg-new px-9 py-5 transition-all"
        }
      >
        <span className="brand-name"> CODING HEROES..!!</span>
        <div className="d-flex flex-rows">
          <a
            href="#Home"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Home
          </a>
          <a
            href="#Aboutme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            About Me
          </a>
          <a
            href="#Resume"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Resumee
          </a>
          <a
            href="#Testimonials"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Testimonials
          </a>
          <a
            href="#Contactme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Contact me
          </a>
        </div>
      </nav>
      <div className="herosection px-10 py-2" id="Home">
        <div className="heterosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello I'm <span className="name-Im-text"> Rosdell Denish!</span>
              </span>
              <span
                className="Im-text-enthusiatic py-2"
                ref={el}
                style={{ minHeight: "80px" }}
              >
                {/* Enthusiastic Dev 😎 */}
              </span>
              <span className="Im-text-subheading">
                Knack of building Software applications..!!
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <a href="#Contactme" className="btn-hire-me">
                  Hire me!
                </a>
                <a
                  href="https://res.cloudinary.com/dbmn882qe/image/upload/v1658544786/RESUMEE_For_WebDevelopment4_hso4es.png"
                  className="btn-resume-me"
                  target="_blank"
                >
                  My-Resume!
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center Anim">
              <img
                className="img-fluid custom-img"
                alt="heroimgae"
                src="https://res.cloudinary.com/dbmn882qe/image/upload/v1658139213/3t_z9twok.png"
              />
            </div>
          </div>
        </div>
        <br />
        <br id="Aboutme" />
      </div>
      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text">About Me</span>
          <span className="why-text-sub">Why Choose Me ?</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div
              className="col-lg-6
              col-md-6
              col-sm-12
              d-flex
              align-item-center
              justify-content-center"
            >
              <lottie-player
                className="lottie-1"
                src="https://assets2.lottiefiles.com/private_files/lf30_igfaivqx.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div
              className="col-lg-6
              col-md-6
              col-sm-12
              py-5
              d-flex
              flex-column"
            >
              <span className="some-text-about-me">
                Fullstacked Web Developer with a background knowledge of Bsc in
                Engineering,along with a knack of building apllications with
                utmost efficiency. Strong Professional willing to be an asset
                for your Organisation.
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are few Highlights</span>
                <span className="few-list">
                  <ul>
                    <li>FullStacked Developer</li>

                    <li>Adobe Photoshop CC 👩‍💻</li>
                    <li>Data Analytics 📈</li>
                    <li>React.js</li>
                    <li>Java ☕ || Spring Boot </li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* RESUME OUTER SECTION */}
      <div className="resume-outer-section d-flex flex-column" id="Resume">
        <span className="about-me-text">Resume</span>
        <span className="why-text-sub text-white">
          My formal Bio details 📚
        </span>
        {/* LOWER RESUMME LEFT */}
        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto" }}
        >
          <div className="col-lg-4 col-md-4  col-sm-12 resume-left-section d-flex flex-row px-0 shadow-lg">
            <div className="d-flex flex-column bg-new text-white ">
              <span className="icons-span">
                <i className="fa-solid fa-graduation-cap"></i>
              </span>
              <span className="icons-span">
                <i className="fa-solid fa-laptop-code"></i>
              </span>
              <span className="icons-span">
                <i className="fa-solid fa-laptop-code"></i>
              </span>
              <span className="icons-span">
                <i className="fa-solid fa-diagram-project"></i>
              </span>
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex flex-column">
                <span
                  className={
                    education === false
                      ? "resume-options-items"
                      : "selected resume-options-items"
                  }
                  onClick={() => {
                    ChangeState(seteducation, true);
                  }}
                >
                  Education
                </span>
                <span
                  className={
                    workhistory === false
                      ? "resume-options-items"
                      : "selected resume-options-items"
                  }
                  onClick={() => {
                    ChangeState(setworkhistory, true);
                  }}
                >
                  Work
                </span>
                <span
                  className={
                    programmings === false
                      ? "resume-options-items"
                      : "selected resume-options-items"
                  }
                  onClick={() => {
                    ChangeState(setprogrammings, true);
                  }}
                >
                  Programming
                </span>
                <span
                  className={
                    projects === false
                      ? "resume-options-items"
                      : "selected resume-options-items"
                  }
                  onClick={() => {
                    ChangeState(setprojects, true);
                  }}
                >
                  Projects
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 resume-right-section">
            {education === true && <Education />}
            {workhistory === true && <Work />}
            {programmings === true && <Programming />}
            {projects === true && <Project />}
          </div>
        </div>
      </div>
      {/*-------- TESTIMONIALS PART---------- */}
      <div className="testimonials-part my-5" id="Testimonials">
        <div className="testimonials-innerpart d-flex flex-column">
          <span className="about-me-text">Testimonials</span>
          <span className="why-text-sub mb-5">
            What my Client says about me
          </span>
          <Testimonials />
        </div>
      </div>
      {/* CONTACT-ME-SECTION */}
      <div className="contact-me-part">
        <div className="relative-bg"></div>
        <div className="contact-inner-part d-flex flex-column">
          <span className="about-me-text text-white">Contact Me</span>
          <span className="why-text-sub mb-5 text-white">
            Let's keep in touch
          </span>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
