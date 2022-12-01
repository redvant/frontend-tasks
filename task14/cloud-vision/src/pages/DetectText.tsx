import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import useDropFiles from "../hooks/useDropFiles";

const fileTypes = ["JPEG", "JPG", "PNG"];
function DetectText() {
  
  const {fileTypes, file, handleChange} = useDropFiles();

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
