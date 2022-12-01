import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import useDropFiles from "../hooks/useDropFiles";
import { RequestData, ResponseData } from "../services/ProcessImageInterface";
import fetchAiData from "../services/ProcessImage";

const fileTypes = ["JPEG", "JPG", "PNG"];
function DetectText() {
  const { fileTypes, file, handleChange } = useDropFiles();
  const [aiData, setAiData] = useState<ResponseData | null>(null);

  const handleProcessImage = async () => {
    let data = createRequestData()
    if (data) {
      let fetchedData = await fetchAiData(data)
      setAiData(fetchedData)
    }
  }

  const createRequestData = () => {
    if (typeof file === "string"){
      let base64Image = file.split(",")[1];
      let requestData: RequestData = {
        requests: [
          {
            features: [
              {
                type: "TEXT_DETECTION",
              },
            ],
            image: {
              content: base64Image,
            },
          },
        ],
      }
      return requestData
    }
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      gap="20px"
    >
      <Typography variant="h4" margin="20px">AI Text Detection</Typography>
      <Box display="flex" gap="20px">
        <FileUploader
          multiple={false}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          classes="drop-area"
        />
        <Button variant="contained" onClick={handleProcessImage}>Process Image</Button>
      </Box>
    </Box>
  );
}

export default DetectText;
