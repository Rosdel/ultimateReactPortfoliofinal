import React from "react"
import "./education.css"

export default function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              FACULTY OF TECHNOLOGY BUSITEMA UNIVERSITY
            </span>
            <span className="university-degree">
              BACHELOR OF SCIENCE IN ENGINEERING
            </span>
          </div>
          <div>
            <span className="yearPassedOut">2016-2021</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              MENGO SENIOR SECONDARY SCHOOL
            </span>
            <span className="university-degree">ADVANCED CERTIFICATE</span>
          </div>
          <div>
            <span className="yearPassedOut">2013-2014</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">LAYIBI COLLEGE</span>
            <span className="university-degree">U.C.E</span>
          </div>
          <div>
            <span className="yearPassedOut">2009-2012</span>
          </div>
        </div>
      </div>
    </>
  )
}
