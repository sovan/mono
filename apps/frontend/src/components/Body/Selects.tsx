import { Form } from "react-bootstrap";

const Selects = (props: any) => {
  return (
    <Form.Group>
      <Form.Label>{props.data.label}</Form.Label>
      <Form.Select
        isInvalid={!!props.dataExchange.errors?.[props.data.name]}
        isValid={
          props.dataExchange.touchedFields?.[props.data.name] &&
          !props.dataExchange.errors?.[props.data.name]
        }
        aria-label="Default select example"
        {...props.dataExchange.register(
          [props.data.name],
          props.data.validation
        )}
      >
        <option value="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Form.Control.Feedback type="invalid">
        <>{props.dataExchange.errors?.[props.data.name]?.message}</>
      </Form.Control.Feedback>
    </Form.Group>
  );
};
export default Selects;
