import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  let navigate = useNavigate();

  const name = "Princess Kemi Olusegun";

  return (
    <div className="container">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form action="">
        <div className="name_div">
          <div className="input_div">
            <label htmlFor="fname">First name</label>
            <input
              id="first_name"
              type="text"
              placeholder="Enter your first name"
              className="three_inputs"
              required
            />
          </div>

          <div className="input_div">
            <label htmlFor="lname">Last name</label>
            <input
              id="last_name"
              type="text"
              placeholder="Enter your last name"
              className="three_inputs"
            />
          </div>
        </div>

        <div className="input_div">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="yourname@email.com"
            className="three_inputs"
            required
          />
        </div>

        <div className="input_div">
          <label htmlFor="message">Message</label>
          <textarea
            name=""
            id="message"
            rows="7"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          ></textarea>
        </div>

        <div className="input_div checkbox_div">
          <input type="checkbox" required />
          <label htmlFor="checkbox">
            You agree to providing your data to {name} who may contact you.
          </label>
        </div>

        <button
          id="btn__submit"
          type="submit"
          onClick={() => {
            alert("Message sent!");
            navigate("/");
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
