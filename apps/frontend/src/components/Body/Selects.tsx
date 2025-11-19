import { Form } from 'react-bootstrap';

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
        {props.data.values !== undefined &&
          props.data.values.map((eachOption: any) => {
            return <option value={eachOption.value}>{eachOption.label}</option>;
          })}
      </Form.Select>
      <Form.Control.Feedback type="invalid">
        <>{props.dataExchange.errors?.[props.data.name]?.message}</>
      </Form.Control.Feedback>
    </Form.Group>
  );
};
export default Selects;
