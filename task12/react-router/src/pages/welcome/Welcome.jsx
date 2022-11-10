
import { useNavigate } from "react-router-dom";
import "./Welcome.css"

function Welcome() {
  const navigate = useNavigate();

  const onGo = () => {
    navigate("/dashboard")
  }

  return (
    <div className="welcome-container">
      <h1>Welcome</h1>
      <button onClick={onGo}>Go!</button>
    </div>
  );
}

export default Welcome;
