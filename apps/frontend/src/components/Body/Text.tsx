import { devText, productionStyle, devHoverText } from '../../styles';

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
  return (
    <div
      key={props.data._id}
      id={props.data._id}
      onMouseUp={props.onMouseUp}
      onMouseMove={props.onMouseMove}
      style={style()}
    >
      {props.data.text}
    </div>
  );
};
export default Text;
