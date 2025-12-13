import { Form, Modal } from 'react-bootstrap';
import Body from '../Body/Body';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Modals = (props: any) => {
  const [formObject, setFormObject] = useState<any>([]);
  const {
    register,
    unregister,
    reset,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    shouldFocusError: true,
    mode: 'onTouched',
  });

  useEffect(() => {
    if (props.modalElement) {
      const res = require('../../data/modals/' + props.modalElement + '.json');
      setFormObject(res);
      console.log('Form set');
    }
  }, [props.modalElement]);

  const onSubmit = async (data: any) => {
    console.log(JSON.stringify(data));
  };
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{formObject['header']}</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Body
            data={formObject['body'] || []}
            formValue={() =>
              console.log('Cannot submit for as this is a design frame')
            }
            dataExchange={{
              touchedFields,
              errors,
              register,
              unregister,
              reset,
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Body data={formObject['footer'] || []} />
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
export default Modals;
