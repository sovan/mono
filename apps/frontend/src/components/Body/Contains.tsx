import { Container, OverlayTrigger } from 'react-bootstrap';
import Body from './Body';
import { style, tooltip } from '../../styles';
const Contains = (props: any) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={props.hoverID === props.data._id ? tooltip('Container') : <></>}
    >
      <Container
        onMouseUp={props.onMouseUp}
        onMouseMove={props.onMouseMove}
        style={style(props.dev, props.hoverID === props.data._id)}
        id={props.data._id}
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
        />
      </Container>
    </OverlayTrigger>
  );
};
export default Contains;
