import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {useRouteError} from "react-router-dom";
import { isRouteErrorResponse } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
  const {status, statusText} = error;
  return (
    <Box 
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      gap="20px"
    >
      <Typography variant="h5">Error Page</Typography>
      <Typography variant="subtitle1" color="secondary">{status} {statusText}</Typography>
      <Link to={"/"} className="link">
        <Button variant="outlined">Return to Home</Button>
      </Link>
    </Box>
  )}
  else {
    return <div>Oops</div>;
  }
}

export default ErrorPage