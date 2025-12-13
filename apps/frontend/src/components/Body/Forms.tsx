import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Body from './Body';
import { style } from '../../styles';
const Forms = (props: any) => {
  const {
    register,
    reset,
    unregister,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    shouldFocusError: true,
    mode: 'onTouched',
  });

  const onSubmit = async (data: any) =>
    props.formValue({ formValue: data, tableName: props.data.table });
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={'tooltip' + props.data._id}>Form</Tooltip>}
      show={props.hoverID === props.data._id && props.dev === true}
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
          dataExchange={{ touchedFields, errors, register, unregister, reset }}
          act={props.act}
          dev={props.dev}
          params={props.params}
          onMouseUp={props.onMouseUp}
          onMouseMove={props.onMouseMove}
          hoverID={props.hoverID}
          value={props.value}
        />
      </Form>
    </OverlayTrigger>
  );
};
export default Forms;
