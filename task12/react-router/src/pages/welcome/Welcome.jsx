import { useNavigate } from "react-router-dom";
import "./Welcome.css"

function Welcome() {
  const navigate = useNavigate();

  const onGo = () => {
    navigate("/posts")
  }

  return (
    <div className="welcome-container">
      <h1>Welcome</h1>
      <button className="btn" onClick={onGo}>Go!</button>
    </div>
  );
}

export default Welcome;
