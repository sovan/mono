import { Accordion } from 'react-bootstrap';
import Body from './Body';

const Accordions = (props: any) => {
  return (
    <Accordion
      defaultActiveKey="0"
      id={props.data.id}
      onMouseUp={props.onMouseUp}
      style={{ minHeight: '20px', border: '2px solid #f00' }}
    >
      {props.data.contains.map((data: any, index: any) => {
        return (
          <Accordion.Item eventKey={index.toString()} key={'ss' + index}>
            <Accordion.Header>{index} </Accordion.Header>
            <Accordion.Body>
              <Body
                data={[data]}
                dataExchange={props.dataExchange}
                params={props.params}
              />
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
export default Accordions;
