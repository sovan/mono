import { devText, productionStyle } from '../../styles';

const Text = (props: any) => {
  return (
    <div
      key={props.data._id}
      id={props.data._id}
      onMouseUp={props.onMouseUp}
      style={props.dev ? devText : productionStyle}
    >
      {props.data.text}
    </div>
  );
};
export default Text;
