import profileimg from "./56e7ed58-9b58-4cae-96d8-2a3159d186f3.jpg";
import "./ProfileCard.css";

import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function PROFILECARD() {
  return (
    <div className="card-container">
      <div className="profile-card">
        <div className="image-wrapper">
          <img src={profileimg} alt="Kunal Sharma" />
        </div>

        <h2>Kunal Sharma</h2>
        <p className="role">CS Student • AI/ML Enthusiast</p>
        <p className="tech">MERN • Prisma • AWS • PostgreSQL</p>

        <div className="social-icons">
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://x.com/yourusername"
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
      </div>
    </div>
  );
}