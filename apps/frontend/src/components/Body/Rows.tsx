import { Row } from 'react-bootstrap';
import Body from './Body';

const Rows = (props: any) => {
  return (
    <Row
      style={{
        minHeight: '40px',
        border: '2px solid #f00',
        margin: '2px',
        padding: '3px',
      }}
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
