import { Col } from "react-bootstrap";
import Body from "./Body";

const Cols = (props: any) => {
  return (
    <Col xs={props.data.size}>
      <Body data={props.data.contains} dataExchange={props.dataExchange} params={props.params} />
    </Col>
  );
};
export default Cols;
