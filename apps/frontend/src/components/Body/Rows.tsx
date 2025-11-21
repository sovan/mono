import { Row } from 'react-bootstrap';
import Body from './Body';
import { devRow, productionStyle, devHoverRow } from '../../styles';

const Rows = (props: any) => {
  const style = () => {
    if (props.dev) {
      if (props.hoverID === props.data._id) {
        return devHoverRow;
      } else {
        return devRow;
      }
    } else {
      return productionStyle;
    }
  };
  return (
    <Row
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
    </Row>
  );
};
export default Rows;
