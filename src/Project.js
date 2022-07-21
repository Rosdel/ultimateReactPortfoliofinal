import React from "react"
export default function Project() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">Javascript</span>
            <span className="university-degree">Developed A dice Game</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">React.Js </span>
            <span className="university-degree">
              Developed an Ecommerce website &#38; this Portfolio
            </span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">Node.Js for the Backend </span>

            <span className="university-degree">
              Implemented payment API for the website
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}
