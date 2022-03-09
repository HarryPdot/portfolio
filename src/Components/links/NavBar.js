import "./NavBar.css";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Links from "../links/Links";
import { CSSTransition } from "react-transition-group";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <>
      <div className="hamburger">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          rounded
          label="Show menu"
          hideOutline={false}
          color="#FFF"
        />
      </div>
      <CSSTransition
        in={isOpen}
        timeout={300}
        className="navbar-container"
        classNames={{
          enter: "enter",
          enterDone: "enterDone",
          exitDone: "exitDone",
          exitActive: "exitActive",
        }}
      >
        <div>
          <div className="links-container">
            <div>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={0}
              >
                Home
              </Link>
            </div>
            <div>
              <Link to="about" spy={true} smooth={true} duration={0}>
                About
              </Link>
            </div>
            <div>
              <Link to="project" spy={true} smooth={true} duration={0}>
                Projects
              </Link>
            </div>
            <div>
              <Link to="contact" spy={true} smooth={true} duration={0}>
                Contact Me
              </Link>
            </div>
          </div>
          <Links></Links>
        </div>
      </CSSTransition>
      <div
        className={
          isOpen ? "disabled-overlay fadeInAnimation" : "disabled-overlay"
        }
      ></div>
    </>
  );
}
