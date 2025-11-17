import { Container } from 'react-bootstrap';
import Body from './Body';

const Contains = (props: any) => {
  return (
    <Container
      onMouseUp={props.onMouseUp}
      style={{ minHeight: '40px', border: '1px solid #000' }}
      id={props.data._id}
    >
      <Body
        data={props.data.contains}
        dataExchange={props.dataExchange}
        params={props.params}
        onMouseUp={props.onMouseUp}
      />
    </Container>
  );
};
export default Contains;
