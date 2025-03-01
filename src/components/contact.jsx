import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    emailjs
      .sendForm("service_yk5y4dp", "template_f0vzmhs", e.target, "ThSxzwM-l3MNp_Zwc")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-4 contact-info p-4 shadow-sm rounded-3 bg-white border">
            <h3 className="mb-4 text-dark fw-semibold">Contact Info</h3>
            <div className="contact-item d-flex align-items-center mb-3">
              <div className="icon-box d-flex justify-content-center align-items-center bg-danger text-white rounded-circle me-3">
                <i className="fa fa-map-marker fs-5"></i>
              </div>
              <p className="mb-0 text-muted">
                <strong className="text-dark">Address:</strong> {props.data ? props.data.address : "Loading..."}
              </p>
            </div>
            <div className="contact-item d-flex align-items-center mb-3">
              <div className="icon-box d-flex justify-content-center align-items-center bg-success text-white rounded-circle me-3">
                <i className="fa fa-phone fs-5"></i>
              </div>
              <p className="mb-0 text-muted">
                <strong className="text-dark">Phone:</strong> {props.data ? props.data.phone : "Loading..."}
              </p>
            </div>
            <div className="contact-item d-flex align-items-center">
              <div className="icon-box d-flex justify-content-center align-items-center bg-warning text-white rounded-circle me-3">
                <i className="fa fa-envelope fs-5"></i>
              </div>
              <p className="mb-0 text-muted">
                <strong className="text-dark">Email:</strong> {props.data ? props.data.email : "Loading..."}
              </p>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.x : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 Kasuku Web Solutions
          </p>
        </div>
      </div>
    </div>
  );
};