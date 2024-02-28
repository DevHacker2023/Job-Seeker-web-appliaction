import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Ashish.</div>
      <div>
        <Link to={"https://github.com/DevHacker2023"} target="_blank">
          <FaGithub />
        </Link>
        
        <Link
          to={"https://www.linkedin.com/in/ashish-kumar-017a05226/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>

      </div>
    </footer>
  );
};

export default Footer;
