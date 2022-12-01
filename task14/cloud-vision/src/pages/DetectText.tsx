import { Box, Typography, Button } from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import useDropFiles from "../hooks/useDropFiles";
import useProcessImageService from "../hooks/useProcessImageService";

function DetectText() {
  const { fileTypes, file, handleChange } = useDropFiles();
  const { aiData, handleProcessImage, cleanupAiData } =
    useProcessImageService(file);

  const onNewImage = (newImage: File) => {
    cleanupAiData();
    handleChange(newImage);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      gap="20px"
    >
      <Typography variant="h4" margin="20px">
        AI Text Detection
      </Typography>
      <Box display="flex" gap="20px">
        <FileUploader
          multiple={false}
          handleChange={onNewImage}
          name="file"
          types={fileTypes}
          classes="drop-area"
        />
        <Button variant="contained" onClick={handleProcessImage}>
          Process Image
        </Button>
      </Box>
      {aiData ? (
        <Typography variant="h6">
          Text Detected:{" "}
          <span className="highlight">
            {aiData.fullTextAnnotation.text}
          </span>
        </Typography>
      ) : null}
    </Box>
  );
}

export default DetectText;
