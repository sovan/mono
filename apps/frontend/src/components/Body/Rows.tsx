import { Row } from "react-bootstrap";
import Body from "./Body";

const Rows = (props: any) => {
  return (
    <Row>
      <Body data={props.data.contains} dataExchange={props.dataExchange} params={props.params} />
    </Row>
  );
};
export default Rows;
