import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="title">
        <h3>React Router</h3>
      </div>
      <hr />
      <ul className="links-list">
        <li>
          <Link to={"/"}>
            <i className="bi bi-house-door"></i>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/dashboard"}>
          <i className="bi bi-speedometer2"></i>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to={"notifications"}>
            <i className="bi bi-bell"></i>
            Notifications
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
