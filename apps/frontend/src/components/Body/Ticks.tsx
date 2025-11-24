import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { style } from '../../styles';

const Ticks = (props: any) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={'tooltip' + props.data._id}>Tick</Tooltip>}
      show={props.hoverID === props.data._id && props.dev === true}
    >
      <div
        style={style(props.dev, props.hoverID === props.data._id)}
        onMouseUp={props.onMouseUp}
        onMouseMove={props.onMouseMove}
        id={props.data._id}
      >
        <Form.Check
          type={props.data.parentType === 'check' ? 'checkbox' : 'radio'}
          value={props.data.value}
          label={props.data.label}
          isInvalid={!!props.dataExchange?.errors?.[props.data.name]}
          {...props.dataExchange.register(
            [props.data.name],
            props.data.validation
          )}
          id={'tick-' + props.data._id}
          key={props.data._id + 'Tick'}
        />
      </div>
    </OverlayTrigger>
  );
};
export default Ticks;
