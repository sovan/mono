import { Container } from 'react-bootstrap';
import Body from './Body';
import { devContainer, productionStyle } from '../../styles';

const Contains = (props: any) => {
  return (
    <Container
      onMouseUp={props.onMouseUp}
      style={props.dev ? devContainer : productionStyle}
      id={props.data._id}
    >
      <Body
        data={props.data.contains}
        dataExchange={props.dataExchange}
        params={props.params}
        onMouseUp={props.onMouseUp}
        formValue={props.formValue}
        act={props.act}
        dev={props.dev}
      />
    </Container>
  );
};
export default Contains;
