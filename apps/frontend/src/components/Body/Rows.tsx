import { Row } from 'react-bootstrap';
import Body from './Body';

const Rows = (props: any) => {
  return (
    <Row
      style={{ minHeight: '30px', border: '1px solid #f00' }}
      onMouseUp={props.onMouseUp}
      id={props.data._id}
    >
      <Body
        data={props.data.contains}
        dataExchange={props.dataExchange}
        params={props.params}
        onMouseUp={props.onMouseUp}
      />
    </Row>
  );
};
export default Rows;
