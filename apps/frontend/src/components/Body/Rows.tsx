import { Row, OverlayTrigger } from 'react-bootstrap';
import Body from './Body';
import { style, tooltip } from '../../styles';

const Rows = (props: any) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={props.hoverID === props.data._id ? tooltip('Row') : <></>}
    >
      <Row
        style={style(props.dev, props.hoverID === props.data._id)}
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
