import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "JPG", "PNG"];
function DetectText() {
  const [file, setFile] = useState<string | null>(null);

  const handleChange = (file: File) => {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        let image64 = reader.result;
        if (typeof image64 === "string") {
          setFile(image64);
        }
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      gap="20px"
    >
      <Typography variant="h4">AI Text Detection</Typography>
      <Box display="flex" gap="20px">
        <FileUploader
          multiple={false}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          classes="drop-area"
        />
      </Box>
    </Box>
  );
}

export default DetectText;
