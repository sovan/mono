import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Body from './Body';

const Forms = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    shouldFocusError: true,
    mode: 'onTouched',
  });
  const onSubmit = async (data: any) => {
    props.formValue(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Body
        data={props.data.contains}
        dataExchange={{ touchedFields, errors, register }}
        act={props.act}
        dev={props.dev}
      />
    </Form>
  );
};
export default Forms;
