import "./Footer.css";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <h2 className="footer-name">Kunal Sharma</h2>

        <p className="footer-tagline">
          Computer Science (AI/ML) student building scalable full-stack and intelligent applications.
        </p>

        <div className="footer-icons">
          <a
            href="https://www.instagram.com/kunalx_7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://x.com/Kunalx_07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://github.com/kunalsharma0709"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Kunal Sharma. All rights reserved.
        </p>

      </div>
    </footer>
  );
}