import "./Contact.css";
import { useEffect, useState } from "react";
import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    setEmail(
      `mailto:harrypham_2@outlook.com?subject=Portfolio Follow Up - ${name}&body=${message}`
    );
  }, [name]);

  useEffect(() => {
    setEmail(
      `mailto:harrypham_2@outlook.com?subject=Portfolio Follow Up - ${name}&body=${message}`
    );
  }, [message]);

  return (
    <div id="contact" className="contact-container">
      <div className="contact-container-2">
        <div className="contact-heading">Contact Me</div>
        <div className="contact-description"></div>
        <div className="contact-details">
          <input
            onChange={handleName}
            className="contact-name"
            type="text"
            placeholder="<Name>"
          />
          <textarea
            onChange={handleMessage}
            className="contact-message"
            type="text"
            placeholder="<Message>"
          ></textarea>
        </div>
        <div className="contact-submit-grid">
          <a
            href={email}
            className={
              name.length && message.length
                ? `contact-submit`
                : `contact-submit disabled`
            }
          >
            Submit
          </a>
        </div>
      </div>

      <footer>
        <div className="contact-links">
          <a
            href="https://linkedin.com/in/harry-pham-developer"
            target={"_blank"}
          >
            <SiLinkedin className="link"></SiLinkedin>
          </a>
          <a href="https://github.com/HarryPdot" target={"_blank"}>
            <GoMarkGithub className="link"></GoMarkGithub>
          </a>
          <a href="https://www.instagram.com/harryphamdev/" target={"_blank"}>
            <BsInstagram className="link"></BsInstagram>
          </a>
        </div>
        <a href="https://github.com/HarryPdot/portfolio" target={"_blank"}>
          Designed and Developed By Harry Pham
          <br /> Portfolio GitHub
        </a>
      </footer>
    </div>
  );
}
