import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`navbar ${show && 'navbar-black'}`}>
      <div className="navContainer">
        <img
          className="navLogo"
          src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
          alt="netflix-logo"
        />
        <img
          className="navAvatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="netflix-avatar"
        />
      </div>
    </div>
  );
}

export default Navbar;
