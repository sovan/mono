import { style } from '../../styles';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Text = (props: any) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={'tooltip' + props.data._id}>Text</Tooltip>}
      show={props.hoverID === props.data._id && props.dev === true}
    >
      <div
        key={props.data._id}
        id={props.data._id}
        onMouseUp={props.onMouseUp}
        onMouseMove={props.onMouseMove}
        style={style(
          props.dev,
          props.hoverID === props.data._id,
          props.data.style
        )}
      >
        {props.data.text}
      </div>
    </OverlayTrigger>
  );
};
export default Text;
