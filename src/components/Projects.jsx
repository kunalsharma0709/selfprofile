import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./Projects.css";

export function PROJECTS() {

  const projects = [
    {
      name: "Trek Application Backend",
      desc: "Node.js + Express backend for trekkingBuilt on OpenStreetMap data and real-time trail conditions — for explorers who go further.",
      link: "https://github.com/kunalsharma0709/trekapplicationbackend",
    },
    {
      name: "Trek Application Frontend",
      desc: "React frontend for trek platform",
      link: "https://github.com/kunalsharma0709/trekfrontend",
    },
    {
      name: "Paytm Clone Backend",
      desc: "Secure payments backend using JWT & MongoDB",
      link: "https://github.com/kunalsharma0709/paytm-backend",
    },
    {
      name: "Paytm Clone Frontend",
      desc: "React-based payment UI with authentication",
      link: "https://github.com/kunalsharma0709/paytmfrontend",
    },
  ];

  return (
    <div className="projects-section">
      <h1>RECENT</h1>
      <h2>PROJECTS</h2>

      <div className="projects-list">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-left">
              <div className="project-image"></div>
            </div>

            <div className="project-middle">
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
            </div>

            <div className="project-right">
              <FaArrowUpRightFromSquare />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}