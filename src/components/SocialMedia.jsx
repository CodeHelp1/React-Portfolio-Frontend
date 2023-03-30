import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a target="blank" href="https://www.linkedin.com/in/rahul-kumar-8b5bb91bb/">
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a target="blank" href="https://github.com/CodeHelp1">
        <BsGithub />
      </a>
    </div>
    <div>
      <a target="blank" href="https://www.instagram.com/Ha__4r_/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
