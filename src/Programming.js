import React from "react"
import "./programming.css"
export default function Programming() {
  const value = [
    {
      text: "Javascript",
      percentage: 80,
    },
    {
      text: "React.js",
      percentage: 70,
    },
    {
      text: "Node.js",
      percentage: 70,
    },
    {
      text: "Python",
      percentage: 60,
    },
  ]
  return (
    <>
      <div>
        <div className="row">
          {value.map((value, index) => {
            return (
              <>
                <div className="col-lg-6 col-md-6 col-sm-6 my-2">
                  <span className="language">{value.text}</span>
                  <div className="progress-some">
                    <div
                      className="progress-new"
                      style={{ width: `${value.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
