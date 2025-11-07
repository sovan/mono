import { Form } from "react-bootstrap";

const Inputs = (props: any) => {
  return (
    <Form.Group>
      <Form.Label>{props.data.label}</Form.Label>
      <Form.Control
        isInvalid={!!props.dataExchange?.errors?.[props.data.name]}
        isValid={
          props.dataExchange.touchedFields?.[props.data.name] &&
          !props.dataExchange.errors?.[props.data.name]
        }
        as={props.data.inputType === "textarea" ? "textarea" : undefined}
        type={props.data.inputType === "password" ? "password" : "text"}
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
  );
};
export default Inputs;
