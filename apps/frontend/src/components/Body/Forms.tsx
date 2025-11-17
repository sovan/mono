import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Body from './Body';
import { useState } from 'react';
import useBackend from '../../hooks/useBackend';

const Forms = (props: any) => {
  const [val, setVal] = useState<any>();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    shouldFocusError: true,
    mode: 'onTouched',
  });
  const { createJSON } = useBackend();
  const onSubmit = async (data: any) => {
    setVal(JSON.stringify(data));
    console.log(JSON.stringify(props.data.act));
    if (props.data.act === 'create-json') {
      createJSON(data);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      onMouseUp={props.onMouseUp}
      style={{ minHeight: '30px', border: '1px solid #00f' }}
      id={props.data._id}
    >
      <Body
        data={props.data.contains}
        dataExchange={{ touchedFields, errors, register }}
        onMouseUp={props.onMouseUp}
      />
    </Form>
  );
};
export default Forms;
