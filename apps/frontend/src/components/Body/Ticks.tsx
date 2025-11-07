import { Form } from "react-bootstrap";

const Ticks = (props: any) => {
  return (
    <Form.Check
      type={props.data.parentType === "check" ? "checkbox" : "radio"}
      id={"checkbox-radio"}
      value={props.data.value}
      label={props.data.label}
      isInvalid={!!props.dataExchange?.errors?.[props.data.name]}
      {...props.dataExchange.register([props.data.name], props.data.validation)}
    />
  );
};
export default Ticks;
