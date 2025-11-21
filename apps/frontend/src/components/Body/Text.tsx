import { style, tooltip } from '../../styles';
import { OverlayTrigger } from 'react-bootstrap';

const Text = (props: any) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={props.hoverID === props.data._id ? tooltip('Text') : <></>}
    >
      <div
        key={props.data._id}
        id={props.data._id}
        onMouseUp={props.onMouseUp}
        onMouseMove={props.onMouseMove}
        style={style(props.dev, props.hoverID, props.data._id)}
      >
        {props.data.text}
      </div>
    </OverlayTrigger>
  );
};
export default Text;
