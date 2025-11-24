import { Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Body from './Body';
import { style } from '../../styles';

const Cols = (props: any) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={'tooltip' + props.data._id}>Column</Tooltip>}
      show={props.hoverID === props.data._id && props.dev}
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
          formValue={props.formValue}
          value={props.value}
        />
      </Col>
    </OverlayTrigger>
  );
};
export default Cols;
