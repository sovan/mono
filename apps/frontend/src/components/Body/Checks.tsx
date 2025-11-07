import { Form } from "react-bootstrap";
import Body from "./Body";

const Checks = (props: any) => {
  const pushValidation = (data: any) => {
    data.forEach((data: any) => {
      if (data.type === "tick") {
        data.validation = props.data.validation;
        data.name = props.data.name;
        data.parentType = props.data.type;
      } else {
        pushValidation(data.contains);
      }
    });
  };
  pushValidation(props.data.contains);
  return (
    <Form.Group>
      <Form.Label>{props.data.label}</Form.Label>
      <Body data={props.data.contains} dataExchange={props.dataExchange} params={props.params} />
      {props.dataExchange.errors?.[props.data.name]?.message}
    </Form.Group>
  );
};
export default Checks;
