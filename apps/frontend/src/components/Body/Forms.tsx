import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Body from "./Body";
import { useState } from "react";
import useBackend from "../../hooks/useBackend";

const Forms = (props: any) => {
  const [val, setVal] = useState<any>();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    shouldFocusError: true,
    mode: "onTouched",
  });
  const { createJSON } = useBackend();
  const onSubmit = async (data: any) => {
    setVal(JSON.stringify(data));
    console.log(JSON.stringify(props.data.act));
    if (props.data.act === "create-json") {
      createJSON(data);
    }
  };

  return (
    <>
      --- Submit : {val} ---
      <fieldset className="mt-4">
        <legend>Contact Details</legend>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Body
            data={props.data.contains}
            dataExchange={{ touchedFields, errors, register }}
          />
        </Form>
      </fieldset>
    </>
  );
};
export default Forms;
