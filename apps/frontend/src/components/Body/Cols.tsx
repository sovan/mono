import { Col, OverlayTrigger } from 'react-bootstrap';
import Body from './Body';
import { style, tooltip } from '../../styles';

const Cols = (props: any) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={
        props.hoverID === props.data._id && props.dev ? (
          tooltip('Column')
        ) : (
          <></>
        )
      }
    >
      <Col
        xs={props.data.size}
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
      </Col>
    </OverlayTrigger>
  );
};
export default Cols;
