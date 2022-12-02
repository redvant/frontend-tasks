import { RequestData } from "./interfaces/RequestData";

const fetchAiData = async (data: RequestData) => {
  const response = await fetch(import.meta.env.VITE_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      "x-goog-user-project": import.meta.env.VITE_GOOG_PROJECT,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export default fetchAiData;
