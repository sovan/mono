import { Col } from 'react-bootstrap';
import Body from './Body';

const Cols = (props: any) => {
  return (
    <Col
      xs={props.data.size}
      style={{ minHeight: '20px', border: '2px solid #0f0' }}
      onMouseUp={props.onMouseUp}
      id={props.data._id}
    >
      <Body
        data={props.data.contains}
        dataExchange={props.dataExchange}
        params={props.params}
        onMouseUp={props.onMouseUp}
      />
    </Col>
  );
};
export default Cols;
