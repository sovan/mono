import { Col } from 'react-bootstrap';
import Body from './Body';
import { devCol, productionStyle } from '../../styles';

const Cols = (props: any) => {
  return (
    <Col
      xs={props.data.size}
      style={props.dev ? devCol : productionStyle}
      onMouseUp={props.onMouseUp}
      id={props.data._id}
    >
      <Body
        data={props.data.contains}
        dataExchange={props.dataExchange}
        params={props.params}
        onMouseUp={props.onMouseUp}
        act={props.act}
        dev={props.dev}
      />
    </Col>
  );
};
export default Cols;
