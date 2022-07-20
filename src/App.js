import { useState } from "react"
import "./App.css"
import Education from "./Education"
import Programming from "./Programming"
import Project from "./Project"
import Work from "./Work"

function App() {
  const [education, seteducation] = useState(true)
  const [workhistory, setworkhistory] = useState(false)
  const [programmings, setprogrammings] = useState(false)
  const [projects, setprojects] = useState(false)
  return (
    <div className="App">
      <div className="herosection px-10 py-5">
        <nav className="d-flex flex-row justify-content-between">
          <span className="brand-name">CODING HEROES..!!</span>
          <div className="d-flex flex-row">
            <span className="mx-4 nav-items">Home</span>
            <span className="mx-4 nav-items">About Me</span>
            <span className="mx-4 nav-items">Resumee</span>
            <span className="mx-4 nav-items">Testimonial</span>
            <span className="mx-4 nav-items">Contact me</span>
          </div>
        </nav>
        <div className="heterosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello I'm <span className="name-Im-text"> Rosdell Denish!</span>
              </span>
              <span className="Im-text-enthusiatic py-2">
                Enthusiastic Dev 😎
              </span>
              <span className="Im-text-subheading">
                Knack of building applications with Front and BackEnd
                Operation..!!
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <button className="btn-hire-me">Hire me!</button>
                <button className="btn-resume-me">My-Resume!</button>
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
        <br />
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
                    <li>FullStacked Web Development</li>
                    <li>Interactive front End Design</li>
                    <li>Adobe Photoshop CC</li>
                    <li>Data Analytics</li>
                    <li>React.js & tailwind CSS--leveling</li>
                    <li>Node.js ,MongoDB and Express--leveling</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-outer-section d-flex flex-column  ">
        <span className="about-me-text">Resume</span>
        <span className="why-text-sub">My formal Bio details 📚</span>
      </div>
      <div className="resume-new-section row">
        <div
          className="col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex px-0 shadow-lg flex-row "
          style={{ width: "70%", marginInline: "auto" }}
        >
          <div className="d-flex flex-column bg-new text-dark">
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
            <span className="resume-options-items">Education</span>
            <span className="resume-options-items">Work</span>
            <span className="resume-options-items">Programming</span>
            <span className="resume-options-items">Projects</span>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 resume-right-secction ">
          {(education === true) & <Education />}
          {(workhistory === true) & <Work />}
          {(programmings === true) & <Programming />}
          {(projects === true) & <Project />}
        </div>
      </div>
    </div>
  )
}

export default App
