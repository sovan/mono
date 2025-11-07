import axios from "axios";
import { useState } from "react";

const useBackend = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [bundleId, setBundleId] = useState("");
  const url = "http://localhost:3000/";

  const createJSON = async (data: any) => {
    setIsLoading(true);
    await axios
      .post(url, data)
      .then((res: any) => {
        if (res.status === 201) setSubmitSuccess(true);
        setBundleId(res.data.id);
      })
      .catch(() => {
        console.log("Error");
      })
      .finally(() => setIsLoading(false));
  };

  return {
    createJSON,
    isLoading,
    bundleId,
    submitSuccess,
  };
};
export default useBackend;
