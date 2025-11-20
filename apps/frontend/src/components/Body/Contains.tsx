import { Container } from 'react-bootstrap';
import Body from './Body';
import { developmentStyle, productionStyle } from '../../styles';

const Contains = (props: any) => {
  return (
    <Container
      onMouseUp={props.onMouseUp}
      style={props.dev ? developmentStyle : productionStyle}
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
