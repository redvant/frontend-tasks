import { useState } from 'react'
import { RequestData, ResponseData } from "../services/ProcessImageInterface";
import fetchAiData from "../services/ProcessImage";

const useProcessImageService = (file: string | null) => {
  const [aiData, setAiData] = useState<ResponseData | null>(null);

  const handleProcessImage = async () => {
    let data = createRequestData()
    if (data) {
      let fetchedData = await fetchAiData(data)
      setAiData(fetchedData.responses[0])
    }
  }

  const cleanupAiData = () => {
    setAiData(null)
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

  return {
    aiData,
    handleProcessImage,
    cleanupAiData,
  }
}



export default useProcessImageService;