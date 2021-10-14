import React from "react";
import "../../css/css-contact_us_section/ContactUs.css";
function ContactUs() {
  return (
    <div className="contact-section">
      <form className="form">
        <h3>Message Us</h3>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
          <br />
          <br />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Email "
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            min="1"
            max="5"
            placeholder="Enter Your Contact Number "
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={5}
            placeholder="Enter Your Message"
            defaultValue={""}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div className="address">
        <h1>Contact Address</h1>
        <p>
          <strong>Street:</strong> 84 2nd Floor, Part 2 Vinoba Puri
        </p>
        <p>
          <strong>City:</strong> Delhi
        </p>
        <p>
          <strong>State/province/area:</strong> Delhi
        </p>
        <p>
          <strong>Phone number : </strong>39545568
        </p>
        <p>
          <strong>Zip code :</strong>110024
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
