import { OverlayTrigger, Table, Tooltip } from 'react-bootstrap';
import Headers from './Headers';
import Records from './Records';
import { style } from '../../styles';

const List = (props: any) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={'tooltip' + props.data._id}>List</Tooltip>}
      show={props.hoverID === props.data._id && props.dev === true}
    >
      <div
        id={props.data._id}
        onMouseUp={props.onMouseUp}
        onMouseMove={props.onMouseMove}
        style={style(props.dev, props.hoverID === props.data._id)}
      >
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
      </div>
    </OverlayTrigger>
  );
};
export default List;
