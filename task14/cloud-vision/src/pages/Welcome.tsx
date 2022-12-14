import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
// import "./Welcome.css";

function Welcome() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      gap="20px"
    >
      <Typography variant="h2" align="center">
        Detection of text in images with AI
      </Typography>
      <Link to={"detectText"} className="link">
        <Button variant="contained">Let's start</Button>
      </Link>
    </Box>
  );
}

export default Welcome;
