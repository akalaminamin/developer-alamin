import React from 'react';
import { FaGithubAlt, FaLinkedinIn, FaDev } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
const FooterIcon = () => {
  return (
    <>
        <div className="icons flex items-center justify-center gap-4 mt-3">
        <a
          href="https://www.facebook.com/alamin3091"
          target="_blank"
          className="social-icon"
        >
          <FiFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/mdalaminamin"
          target="_blank"
          className="social-icon"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/akalaminamin"
          target="_blank"
          className="social-icon"
        >
          <FaGithubAlt />
        </a>
        <a
          href="https://dev.to/akalaminamin"
          target="_blank"
          className="social-icon"
        >
          <FaDev />
        </a>
      </div>
    </>
  )
}

export default FooterIcon