import { Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Body from './Body';
import { style } from '../../styles';

const Rows = (props: any) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={'tooltip' + props.data._id}>Row</Tooltip>}
      show={props.hoverID === props.data._id && props.dev === true}
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
          value={props.value}
          formValue={props.formValue}
        />
      </Row>
    </OverlayTrigger>
  );
};
export default Rows;
