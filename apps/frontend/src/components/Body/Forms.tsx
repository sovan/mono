import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Body from './Body';
import { useState } from 'react';

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
  const onSubmit = async (data: any) => {
    setVal(JSON.stringify(data));
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Body
        data={props.data.contains}
        dataExchange={{ touchedFields, errors, register }}
      />
    </Form>
  );
};
export default Forms;
