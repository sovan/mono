import { Form, OverlayTrigger } from 'react-bootstrap';
import { style, tooltip } from '../../styles';

const Inputs = (props: any) => {
  if (props.data.visibility && props.data.visibility === 'hidden') {
    return;
  }
  return (
    <OverlayTrigger
      placement="top"
      overlay={
        props.hoverID === props.data._id && props.dev ? (
          tooltip('Inputs')
        ) : (
          <></>
        )
      }
    >
      <Form.Group
        style={style(props.dev, props.hoverID === props.data._id)}
        onMouseUp={props.onMouseUp}
        onMouseMove={props.onMouseMove}
        id={props.data._id}
      >
        <Form.Label>{props.data.label}</Form.Label>
        <Form.Control
          isInvalid={!!props.dataExchange?.errors?.[props.data.name]}
          isValid={
            props.dataExchange.touchedFields?.[props.data.name] &&
            !props.dataExchange.errors?.[props.data.name]
          }
          as={props.data.inputType === 'textarea' ? 'textarea' : undefined}
          type={props.data.inputType}
          placeholder={props.data.label}
          {...props.dataExchange.register(
            [props.data.name],
            props.data.validation
          )}
        />
        <Form.Control.Feedback type="invalid">
          <>{props.dataExchange.errors?.[props.data.name]?.message}</>
        </Form.Control.Feedback>
      </Form.Group>
    </OverlayTrigger>
  );
};
export default Inputs;
