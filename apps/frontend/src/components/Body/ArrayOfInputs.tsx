import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Inputs from './Inputs';

export type typeOfValue = {
  name: any;
  value?: string;
};

const ArrayOfInputs = (props: any) => {
  const [inputNameValue, setInputNameValue] = useState<Array<typeOfValue>>([]);
  const handleAdd = () => {
    const fieldName = props.data.name + '_' + inputNameValue.length;
    setInputNameValue([...inputNameValue, { name: fieldName }]);
  };

  const handleDel = (index: number) => {
    const newFields: Array<typeOfValue> = [];
    const newValue: { [key: string]: string } = {};
    for (let i = 0; i < inputNameValue.length; i++) {
      if (index !== i) {
        const fieldName: string = props.data.name + '_' + newFields.length;
        newFields.push({ name: fieldName, value: inputNameValue[i]['value'] });
        newValue[fieldName] = inputNameValue[i]['value'] || '';
      }
    }
    props.dataExchange.reset(newValue);
    setInputNameValue(newFields);
  };

  const handleValue = (name: string, val: string) => {
    const a: Array<typeOfValue> = [];
    for (let i = 0; i < inputNameValue.length; i++) {
      if (inputNameValue[i]['name'] === name) {
        a.push({ name: inputNameValue[i]['name'], value: val });
      } else {
        a.push(inputNameValue[i]);
      }
    }
    setInputNameValue(a);
  };

  useEffect(() => {
    setInputNameValue([...inputNameValue, { name: props.data.name + '_0' }]);
  }, []);

  return (
    <>
      <Row>
        <Col xs={10}>{props.data.header}</Col>
        <Col className="text-end" xs={2}>
          <Button onClick={handleAdd}>{props.data.addButtonLabel}</Button>
        </Col>
      </Row>
      {inputNameValue.map((item, index) => {
        return (
          <Row>
            <Col xs={10}>
              <Inputs
                data={{
                  type: 'input',
                  inputType: props.data.inputType,
                  name: item['name'],
                  label: props.data.label.replace('{index}', index + 1),
                  validation: props.data.validation,
                }}
                valueEntered={handleValue}
                dataExchange={props.dataExchange}
                params={props.params}
                dev={props.dev}
                value={{ [item['name']]: item['value'] }}
                formValue={props.formValue}
              />
            </Col>
            <Col xs={2} className="text-end">
              <Button onClick={() => handleDel(index)}>
                {props.data.deleteButtonLabel}
              </Button>
            </Col>
          </Row>
        );
      })}
    </>
  );
};
export default ArrayOfInputs;
