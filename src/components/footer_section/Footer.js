import React from "react";
import "../../css/css-footer/footer.css";
import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="footer_items">
          <div className="item-left">
            <a href="/">
              <p>Contact Us</p>
            </a>
            <a href="/">
              <p>About</p>
            </a>
          </div>
          <div className="item-right">
            <h4>We are Social !!</h4>
            <div className="social_icons">
              <div className="fa fa-facebook">
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
              </div>
              <div className="fa fa-twitter">
                <a href="https://twitter.com/">
                  <FaTwitter />
                </a>
              </div>
              <div className=" fa fa-linkedin">
                <a href="https://www.linkedin.com/">
                  <FaLinkedin />
                </a>
              </div>
              <div className=" fa fa-youtube">
                <a href="https://www.youtube.com/">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="copyright">Ⓒ 2021,All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
