import React from "react";
import { FaInstagram, FaGithub, FaEnvelopeOpenText } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div class="icons">
        <ul>
          <li>
            <i class="footer-icon instagram">
              <FaInstagram size={28} />
            </i>
          </li>
          <li>
            <i class="footer-icon envelope">
              <FaEnvelopeOpenText size={28} />
            </i>
          </li>
          <li>
            <i class="footer-icon github">
              <FaGithub size={28} />
            </i>
          </li>
        </ul>
      </div>
      <div class="copyright">&copy; All rights reserved | Soul Glory 2021</div>
    </footer>
  );
};

export default Footer;
