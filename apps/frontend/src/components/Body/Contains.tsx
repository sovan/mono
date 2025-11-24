import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Body from './Body';
import { style } from '../../styles';
const Contains = (props: any) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={'tooltip' + props.data._id}>Container</Tooltip>}
      show={props.hoverID === props.data._id && props.dev}
    >
      <Container
        onMouseUp={props.onMouseUp}
        onMouseMove={props.onMouseMove}
        style={style(props.dev, props.hoverID === props.data._id)}
        id={props.data._id}
        key={props.data._id + 'Container'}
      >
        <Body
          data={props.data.contains}
          dataExchange={props.dataExchange}
          params={props.params}
          onMouseUp={props.onMouseUp}
          onMouseMove={props.onMouseMove}
          hoverID={props.hoverID}
          formValue={props.formValue}
          act={props.act}
          dev={props.dev}
          value={props.value}
        />
      </Container>
    </OverlayTrigger>
  );
};
export default Contains;
