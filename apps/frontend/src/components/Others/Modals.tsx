import { Modal } from 'react-bootstrap';
import Body from '../Body/Body';
import { useEffect, useState } from 'react';

const Modals = (props: any) => {
  const [formObject, setFormObject] = useState<any>([]);
  useEffect(() => {
    const res = require(`../../data/modal-column-form.json`);
    setFormObject(res);
    console.log('Form set');
  }, []);
  const dataFind = (data: any) => {
    console.log(data);
  };
  return (
    <Modal show={props.show}>
      <Modal.Header closeButton>
        <Modal.Title>Columns in row</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Body data={formObject} dataExchange={dataFind} />;
      </Modal.Body>
    </Modal>
  );
};
export default Modals;
