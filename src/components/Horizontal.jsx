import { useNavigate } from "react-router-dom";
import { FaHome, FaFolder, FaTools } from "react-icons/fa";
import "./HorizontalNavbar.css";

export function HORIZONTALNAVBAR() {
  const navigate = useNavigate();

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="nav-item" onClick={() => navigate("/Home")}>
          <FaHome size={20} />
          <span className="tooltip">Home</span>
        </div>

        <div className="nav-item" onClick={() => navigate("/Tools")}>
          <FaTools size={20} />
          <span className="tooltip">Tools</span>
        </div>

        <div className="nav-item" onClick={() => navigate("/Projects")}>
          <FaFolder size={20} />
          <span className="tooltip">Projects</span>
        </div>
      </div>
    </div>
  );
}

