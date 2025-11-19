import axios from 'axios';
import { useState } from 'react';

const useBackend = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCreated, setIsCreated] = useState(true);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [pageData, setPageData] = useState({});
  const url = 'http://localhost:3000/blocks/';

  const createJSON = async (
    droppedElement: string | undefined,
    droppedPlace: string
  ) => {
    setIsCreated(false);
    let json = {};
    switch (droppedElement) {
      case 'Container':
        json = {
          type: 'container',
          contains: [],
        };
        break;
      case 'Row':
        json = {
          type: 'row',
          contains: [],
        };
        break;
      case 'Column':
        json = {
          type: 'col',
          size: '1',
          contains: [],
        };
        break;
    }

    await axios
      .post(url, json)
      .then(async (res: any) => {
        if (res.status === 201) {
          const newID = res.data._id;
          setSubmitSuccess(true);
          await axios
            .get(url + droppedPlace)
            .then(async (res: any) => {
              const updateData = res.data;
              delete updateData['_id'];
              updateData['contains'].push(newID);
              await axios
                .post(url + droppedPlace, updateData)
                .then(async (res: any) => {
                  if (res.status === 201) setSubmitSuccess(true);
                })
                .catch(() => {
                  console.log('Error');
                })
                .finally(() => setIsCreated(true));
            })
            .catch(() => {
              console.log('Error');
            });
        }
      })
      .catch(() => {
        console.log('Error');
      });
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
    isCreated,
  };
};
export default useBackend;
