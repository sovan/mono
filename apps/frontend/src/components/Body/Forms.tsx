import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Body from './Body';
import { style } from '../../styles';
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
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={'tooltip' + props.data._id}>Form</Tooltip>}
      show={props.hoverID === props.data._id && props.dev}
    >
      <Form
        onSubmit={handleSubmit(onSubmit)}
        onMouseUp={props.onMouseUp}
        onMouseMove={props.onMouseMove}
        style={style(props.dev, props.hoverID === props.data._id)}
        id={props.data._id}
      >
        <Body
          data={props.data.contains}
          dataExchange={{ touchedFields, errors, register }}
          act={props.act}
          dev={props.dev}
          params={props.params}
          onMouseUp={props.onMouseUp}
          onMouseMove={props.onMouseMove}
          hoverID={props.hoverID}
          formValue={props.formValue}
        />
      </Form>
    </OverlayTrigger>
  );
};
export default Forms;
