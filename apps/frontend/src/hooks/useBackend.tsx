import axios from 'axios';
import { useState } from 'react';

const useBackend = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCreated, setIsCreated] = useState(true);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [pageData, setPageData] = useState({});
  const [propertyData, setPropertyData] = useState({});
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
      case 'Text':
        json = {
          type: 'text',
          text: 'Please enter something',
        };
        break;
      case 'Accordian':
        json = {
          type: 'accordion',
          contains: [],
        };
        break;
      case 'Button':
        json = {
          type: 'button',
          buttonText: 'Simple Button',
        };
        break;
      case 'Form':
        json = {
          type: 'form',
          contains: [],
        };
        break;
      case 'Text Input':
        json = {
          type: 'input',
          inputType: 'text',
          name: Date.now(),
          label: 'Lable not created',
        };
        break;
      case 'Password Input':
        json = {
          type: 'input',
          inputType: 'password',
          name: Date.now(),
          label: 'Lable not created',
        };
        break;
      case 'Text Area':
        json = {
          type: 'input',
          inputType: 'textarea',
          name: Date.now(),
          label: 'Lable not created',
        };
        break;
      case 'Radio':
        json = {
          type: 'radio',
          name: Date.now(),
          label: 'Lable not created',
          contains: [],
        };
        break;
      case 'Check Box':
        json = {
          type: 'check',
          name: Date.now(),
          label: 'Lable not created',
          contains: [],
        };
        break;
      case 'Tick':
        json = {
          type: 'tick',
          label: 'Add lable',
          value: Date.now(),
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

  const fetchJSON = async (ID: any, type?: string) => {
    setIsLoading(true);
    await axios
      .get(url + ID)
      .then((res: any) => {
        if (res.status === 201) setSubmitSuccess(true);
        if (type === 'property') {
          setPropertyData(res.data);
        } else {
          setPageData(res.data);
        }
      })
      .catch(() => {
        console.log('Error');
      })
      .finally(() => setIsLoading(false));
  };

  const updateJSON = async (newValue: any, oldValue: any) => {
    let json = {};
    switch (oldValue.type) {
      case 'col':
        json = {
          type: oldValue.type,
          size: newValue.size,
          contains: oldValue.contains,
        };
        break;
      case 'text':
        json = {
          type: oldValue.type,
          text: newValue.text,
        };
        break;
      case 'input':
        json = {
          type: oldValue.type,
          label: newValue.label,
        };
        break;
      default:
        console.log('Sovan: Update JSON is not created for ' + oldValue.type);
    }
    setIsCreated(false);
    await axios
      .post(url + oldValue._id, json)
      .then(async (res: any) => {
        if (res.status === 201) setSubmitSuccess(true);
      })
      .catch(() => {
        console.log('Error');
      })
      .finally(() => setIsCreated(true));
  };

  const deleteJSON = async (oldValue: any, parent: string) => {
    setIsCreated(false);
    if (parent !== 'Page') {
      await axios
        .get(url + 'actual-json/' + parent)
        .then(async (res: any) => {
          const updateData = res.data;
          delete updateData['_id'];
          delete updateData['__v'];
          const a = updateData['contains'].filter(
            (item: any) => item !== oldValue._id
          );
          updateData['contains'] = a;
          await axios
            .post(url + parent, updateData)
            .then(async (res: any) => {
              if (res.status === 201) {
                await axios
                  .delete(url + oldValue._id)
                  .then(async (res: any) => {
                    if (res.status === 201) setIsCreated(true);
                  })
                  .catch(() => {
                    console.log('Error');
                  })
                  .finally(() => setIsCreated(true));
              }
            })
            .catch(() => {
              console.log('Error');
            });
        })
        .catch(() => {
          console.log('Error');
        });
    } else {
      await axios
        .delete(url + oldValue._id)
        .then(async (res: any) => {
          if (res.status === 201) setIsCreated(true);
        })
        .catch(() => {
          console.log('Error');
        })
        .finally(() => setIsCreated(true));
    }
  };

  return {
    fetchJSON,
    createJSON,
    isLoading,
    submitSuccess,
    pageData,
    isCreated,
    propertyData,
    updateJSON,
    deleteJSON,
  };
};
export default useBackend;
