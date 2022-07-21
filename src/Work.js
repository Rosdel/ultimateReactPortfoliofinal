import React from "react"
import "./work.css"
export default function Work() {
  return (
    <>
      <div className="work-inside-new my-4 mx-2">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="compony-name">Nerdy Turtlez</span>
            <span className="yearPassedOut">2020-2021</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Full stack Developer</span>
          <span className="description-position">
            <ul>
              <li>
                Built websites for client as a freelancer with NerdyTutlez
              </li>
              <li>
                Built an E-commerce websites for client as a freelancer with
                NerdyTutlez
              </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  )
}
