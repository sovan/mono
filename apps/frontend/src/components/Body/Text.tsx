import { devText, productionStyle, devHoverText } from '../../styles';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Text = (props: any) => {
  const style = () => {
    if (props.dev) {
      if (props.hoverID === props.data._id) {
        return devHoverText;
      } else {
        return devText;
      }
    } else {
      return productionStyle;
    }
  };
  const tooltip = (
    <Tooltip id="tooltip">
      <strong>Text</strong>
    </Tooltip>
  );
  return (
    <OverlayTrigger
      placement="top"
      overlay={props.hoverID === props.data._id ? tooltip : <></>}
    >
      <div
        key={props.data._id}
        id={props.data._id}
        onMouseUp={props.onMouseUp}
        onMouseMove={props.onMouseMove}
        style={style()}
      >
        {props.data.text}
      </div>
    </OverlayTrigger>
  );
};
export default Text;
