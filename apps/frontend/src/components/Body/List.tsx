import { Table } from "react-bootstrap";
import Headers from "./Headers";
import Records from "./Records";

const List = (props: any) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <Headers data={props.data.listHeader} />
        </tr>
      </thead>
      <tbody>
        <Records
          data={props.data.listRecord}
          operations={props.data.operations}
        />
      </tbody>
    </Table>
  );
};
export default List;
