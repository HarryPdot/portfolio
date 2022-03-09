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

  const handleClick = () => {
    setOpen(!isOpen);
  };

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
        timeout={{
          appear: 350,
          enter: 0,
          exit: 350,
        }}
        className="navbar-container"
        classNames={{
          enter: "enter",
          enterDone: "enterDone",
          exit: "exit",
          exitActive: "exitActive",
          exitDone: "exitDone",
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
                onClick={handleClick}
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                onClick={handleClick}
                to="about"
                spy={true}
                smooth={true}
                duration={0}
              >
                About
              </Link>
            </div>
            <div>
              <Link
                onClick={handleClick}
                to="project"
                spy={true}
                smooth={true}
                duration={0}
              >
                Projects
              </Link>
            </div>
            <div>
              <Link
                onClick={handleClick}
                to="contact"
                spy={true}
                smooth={true}
                duration={0}
              >
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
