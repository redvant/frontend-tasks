import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="title">
        <h3>Posts Manager</h3>
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
          <Link to={"/posts"}>
          <i className="bi bi-speedometer2"></i>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to={"create"}>
            <i className="bi bi-file-earmark-plus"></i>
            Create Post
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
