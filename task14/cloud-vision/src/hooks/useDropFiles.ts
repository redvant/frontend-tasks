import { useState } from "react";

const useDropFiles = () => {
  const [file, setFile] = useState<string | null>(null);

  const fileTypes = ["JPEG", "JPG", "PNG"];

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

  return {
    fileTypes,
    file,
    handleChange,
  };
};

export default useDropFiles;