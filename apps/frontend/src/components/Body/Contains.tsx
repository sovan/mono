import { Container } from 'react-bootstrap';
import Body from './Body';

const Contains = (props: any) => {
  return (
    <Container
      onMouseUp={props.onMouseUp}
      style={{ minHeight: '40px', border: '2px solid #000', padding: '2px' }}
      id={props.data._id}
    >
      <Body
        data={props.data.contains}
        dataExchange={props.dataExchange}
        params={props.params}
        onMouseUp={props.onMouseUp}
        formValue={props.formValue}
      />
    </Container>
  );
};
export default Contains;
