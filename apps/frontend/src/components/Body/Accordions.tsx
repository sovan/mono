import { Accordion, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Body from './Body';
import { style } from '../../styles';

const Accordions = (props: any) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={'tooltip' + props.data._id}>Accordian</Tooltip>}
      show={props.hoverID === props.data._id && props.dev === true}
    >
      <Accordion
        defaultActiveKey="0"
        id={props.data._id}
        onMouseUp={props.onMouseUp}
        onMouseMove={props.onMouseMove}
        style={style(props.dev, props.hoverID === props.data._id)}
      >
        {props.data.contains.map((data: any, index: any) => {
          return (
            <Accordion.Item
              eventKey={index.toString()}
              key={props.data._id + index}
            >
              <Accordion.Header>
                {props.data.headers && props.data.headers[index + 1]
                  ? props.data.headers[index + 1]
                  : index + 1}
              </Accordion.Header>
              <Accordion.Body
                style={{ minHeight: '40px', border: '2px solid #d2e310' }}
              >
                <Body
                  data={[data]}
                  dataExchange={props.dataExchange}
                  params={props.params}
                  onMouseUp={props.onMouseUp}
                  onMouseMove={props.onMouseMove}
                  hoverID={props.hoverID}
                  formValue={props.formValue}
                />
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </OverlayTrigger>
  );
};
export default Accordions;
