import { Col } from 'react-bootstrap';
import Body from './Body';
import { devCol, productionStyle, devHoverCol } from '../../styles';

const Cols = (props: any) => {
  const style = () => {
    if (props.dev) {
      if (props.hoverID === props.data._id) {
        return devHoverCol;
      } else {
        return devCol;
      }
    } else {
      return productionStyle;
    }
  };
  return (
    <Col
      xs={props.data.size}
      style={style()}
      onMouseUp={props.onMouseUp}
      onMouseMove={props.onMouseMove}
      id={props.data._id}
    >
      <Body
        data={props.data.contains}
        dataExchange={props.dataExchange}
        params={props.params}
        onMouseUp={props.onMouseUp}
        onMouseMove={props.onMouseMove}
        hoverID={props.hoverID}
        act={props.act}
        dev={props.dev}
      />
    </Col>
  );
};
export default Cols;
