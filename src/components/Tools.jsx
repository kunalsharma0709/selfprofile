import { PROFILECARD } from "./Profile";
import "./Tools.css";

import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiOpenai,
  SiPrisma,
  SiDocker,
  SiTensorflow,
  SiHuggingface,
  SiGit,
  SiAmazon
} from "react-icons/si";

export function TOOLS() {
  const tools = [
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
    { name: "React", icon: <SiReact color="#61DAFB" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    { name: "OpenAI", icon: <SiOpenai color="#ffffff" /> },
    { name: "Prisma", icon: <SiPrisma color="#2D3748" /> },
    { name: "Docker", icon: <SiDocker color="#2496ED" /> },
    { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
    { name: "HuggingFace", icon: <SiHuggingface color="#FFD21E" /> },
    { name: "Git", icon: <SiGit color="#F05032" /> },
    { name: "AWS", icon: <SiAmazon color="#FF9900" /> },
  ];

  return (
    <div className="tools-page">

      <div className="tools-layout">

        {/* LEFT SIDE */}
        <div className="tools-left">
          <PROFILECARD />
        </div>

        {/* RIGHT SIDE */}
        <div className="tools-right">
          <h1 className="tools-title">MY</h1>
          <h2 className="tools-subtitle">TOOLS</h2>

          <p className="tools-tagline">
            Full-stack and AI/ML technologies I use to build scalable,
            intelligent applications.
          </p>

          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-card">
                <div className="tool-icon">{tool.icon}</div>
                <h3>{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}