import { Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
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
  const tooltip = (
    <Tooltip id="tooltip">
      <strong>Row</strong>
    </Tooltip>
  );
  return (
    <OverlayTrigger
      placement="top"
      overlay={props.hoverID === props.data._id ? tooltip : <></>}
    >
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
    </OverlayTrigger>
  );
};
export default Rows;
