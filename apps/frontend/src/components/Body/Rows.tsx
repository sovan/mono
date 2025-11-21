import { Row } from 'react-bootstrap';
import Body from './Body';
import { devRow, productionStyle } from '../../styles';

const Rows = (props: any) => {
  return (
    <Row
      style={props.dev ? devRow : productionStyle}
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
    </Row>
  );
};
export default Rows;
