import { useState } from "react";
import {
  RequestData,
  DataResponses,
  AiData,
  ErrorResponse,
  isErrorResponse,
} from "../services/ProcessImageInterface";
import fetchAiData from "../services/ProcessImage";

const useProcessImageService = (file: string | null) => {
  const [aiData, setAiData] = useState<AiData | null>(null);
  const [fetchError, setFetchError] = useState<ErrorResponse | null>(null);

  const handleProcessImage = async () => {
    let data = createRequestData();
    if (data) {
      let fetchedData: DataResponses | ErrorResponse = await fetchAiData(data);
      if (isErrorResponse(fetchedData)) {
        setFetchError(fetchedData);
      } else {
        setAiData(fetchedData.responses[0]);
      }
    }
  };

  const cleanupFetchData = () => {
    setAiData(null);
    setFetchError(null);
  };

  const createRequestData = () => {
    if (typeof file === "string") {
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
      };
      return requestData;
    }
  };

  return {
    aiData,
    fetchError,
    handleProcessImage,
    cleanupFetchData,
  };
};

export default useProcessImageService;
