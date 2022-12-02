import { useState } from "react";
import { RequestData } from "../services/interfaces/RequestData";
import { DataResponses, AiData } from "../services/interfaces/DataResponses";
import { ErrorResponse, Error } from "../services/interfaces/ErrorResponse";
import { isOfType } from "../services/interfaces/GenericTypeGuard";
import fetchAiData from "../services/ProcessImage";

const useProcessImageService = (file: string | null) => {
  const [aiData, setAiData] = useState<AiData | null>(null);
  const [fetchError, setFetchError] = useState<Error | null>(null);

  const handleProcessImage = async () => {
    let data = createRequestData();
    if (data) {
      let fetchedData: DataResponses | ErrorResponse = await fetchAiData(data);
      if (isOfType<DataResponses>(fetchedData, 'responses')) {
        setAiData(fetchedData.responses[0]);
      }
      if (isOfType<ErrorResponse>(fetchedData, 'error')) {
        setFetchError(fetchedData.error);
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
