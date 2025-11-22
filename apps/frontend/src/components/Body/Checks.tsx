import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Body from './Body';
import { style } from '../../styles';

const Checks = (props: any) => {
  const pushValidation = (data: any) => {
    data.forEach((data: any) => {
      if (data.type === 'tick') {
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
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={'tooltip' + props.data._id}>Radio</Tooltip>}
      show={props.hoverID === props.data._id && props.dev}
    >
      <Form.Group
        style={style(props.dev, props.hoverID === props.data._id)}
        id={props.data._id}
        onMouseUp={props.onMouseUp}
        onMouseMove={props.onMouseMove}
      >
        <Form.Label>
          {props.data.label} --- {props.data._id} --- {props.hoverID}
        </Form.Label>
        <Body
          data={props.data.contains}
          dataExchange={props.dataExchange}
          params={props.params}
        />
        {props.dataExchange.errors?.[props.data.name]?.message}
      </Form.Group>
    </OverlayTrigger>
  );
};
export default Checks;
