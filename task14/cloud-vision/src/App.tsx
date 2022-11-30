import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./theme";
import Welcome from "./pages/Welcome";
import ErrorPage from "./pages/ErrorPage";
import DetectText from "./pages/DetectText";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <ErrorPage />
  },
  {
    path: "detectText",
    element: <DetectText />
  }
]);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
