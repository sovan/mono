import axios from 'axios';
import { useState } from 'react';

const useBackend = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [pageData, setPageData] = useState({});
  const url = 'http://localhost:3000/blocks/';

  const createJSON = async (data: any) => {
    setIsLoading(true);
    await axios
      .post(url, data)
      .then((res: any) => {
        if (res.status === 201) setSubmitSuccess(true);
      })
      .catch(() => {
        console.log('Error');
      })
      .finally(() => setIsLoading(false));
  };

  const fetchJSON = async (ID: any) => {
    setIsLoading(true);
    await axios
      .get(url + ID)
      .then((res: any) => {
        if (res.status === 201) setSubmitSuccess(true);
        setPageData(res.data);
      })
      .catch(() => {
        console.log('Error');
      })
      .finally(() => setIsLoading(false));
  };

  return {
    fetchJSON,
    createJSON,
    isLoading,
    submitSuccess,
    pageData,
  };
};
export default useBackend;
