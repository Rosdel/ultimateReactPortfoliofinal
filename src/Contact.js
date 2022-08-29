import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const form = useRef();

  const [message, setmessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_94sra1k",
        "template_2fkixqa",
        form.current,
        "vxyTQDuoaNvg-JIKJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div>
        <div className="contact-me-card row ">
          <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
            <span className="get-in-touch mx-4 my-5">Get in touch</span>
            <div className="py-5 d-flex justify-content-center">
              <lottie-player
                src="https://assets7.lottiefiles.com/private_files/lf30_pfvbpvar.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
            <form
              onSubmit={sendEmail}
              ref={form}
              className="d-flex flex-column card-contact-right"
            >
              <div
                className="input-group my-3 d-flex flex-column"
                id="Contactme"
              >
                <label>Name</label>
                <input
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your Name"
                  className="input-groups"
                  name="name"
                />
              </div>

              <div className="input-group my-3 d-flex flex-column">
                <label>Email</label>
                <input
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  type="email"
                  placeholder="Enter your Email"
                  className="input-groups"
                  name="email"
                />
              </div>
              <div className="input-group my-3 d-flex flex-column">
                <label>Subject</label>
                <input
                  value={subject}
                  onChange={(e) => {
                    setsubject(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your subject"
                  className="input-groups"
                  name="subject"
                />
              </div>

              <div className="input-group my-3 d-flex flex-column">
                <label>Message</label>
                <textarea
                  onChange={(e) => {
                    setmessage(e.target.value);
                  }}
                  placeholder="Enter your message"
                  className="input-groups"
                  name="message"
                ></textarea>
              </div>

              <div className="input-group my-3 d-flex flex-column">
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
