import React from "react";
import "./testimonials.css";

export default function Testimonials() {
  const testimoniallls = [
    {
      name: "Zilla",
      text:
        "This guy is incredibly awesome,I hired him and he delivered standard work before deadline.",
    },
    {
      name: "Felix Onen",
      text:
        "Just wanted to let you know that, we shall always work with you, Thanks Rosdell for exceeding our Expectations",
    },
    {
      name: "Gunya",
      text:
        "We are very happy with Rosdell; very serious and consistent in his work. Rosdell and his team of programmers have always been there for us all the time. This is a person I can recommened anyone to work with.",
    },
  ];

  return (
    <>
      <div>
        <div className="row mx-5">
          {testimoniallls.map((value) => {
            return (
              <div className="col-lg-4 col-sm-12 col-md-6 my-4">
                <div className="card shadow testimonials-card d-flex flex-column">
                  <span className="description">{value.text}</span>
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="name">{value.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>{" "}
    </>
  );
}
