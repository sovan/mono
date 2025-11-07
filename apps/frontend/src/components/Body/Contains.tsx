import { Container } from "react-bootstrap";
import Body from "./Body";

const Contains = (props: any) => {
  return (
    <Container>
      <Body data={props.data.contains} dataExchange={props.dataExchange} params={props.params} />
    </Container>
  );
};
export default Contains;
