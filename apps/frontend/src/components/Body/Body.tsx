import Contains from './Contains';
import Rows from './Rows';
import Cols from './Cols';
import Text from './Text';
import Buttons from './Buttons';
import List from './List';
import Links from './Links';
import Accordions from './Accordions';
import Forms from './Forms';
import Inputs from './Inputs';
import Selects from './Selects';
import Checks from './Checks';
import Ticks from './Ticks';
import ArrayOfInputs from './ArrayOfInputs';

const Body = (props: any) => {
  return props.data.map((data: any) => {
    switch (data.type) {
      case 'container':
        return (
          <Contains
            onMouseUp={props.onMouseUp}
            onMouseMove={props.onMouseMove}
            hoverID={props.hoverID}
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
            formValue={props.formValue}
            act={props.act}
            dev={props.dev}
            value={props.value}
          />
        );
      case 'row':
        return (
          <Rows
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
            onMouseUp={props.onMouseUp}
            onMouseMove={props.onMouseMove}
            hoverID={props.hoverID}
            act={props.act}
            dev={props.dev}
            value={props.value}
            formValue={props.formValue}
          />
        );
      case 'col':
        return (
          <Cols
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
            onMouseUp={props.onMouseUp}
            onMouseMove={props.onMouseMove}
            hoverID={props.hoverID}
            act={props.act}
            dev={props.dev}
            value={props.value}
            formValue={props.formValue}
          />
        );
      case 'text':
        return (
          <Text
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
            onMouseUp={props.onMouseUp}
            onMouseMove={props.onMouseMove}
            hoverID={props.hoverID}
            dev={props.dev}
            value={props.value}
            formValue={props.formValue}
          />
        );
      case 'button':
        return (
          <Buttons
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
            act={props.act}
            dev={props.dev}
            value={props.value}
            formValue={props.formValue}
            hoverID={props.hoverID}
            onMouseUp={props.onMouseUp}
            onMouseMove={props.onMouseMove}
          />
        );
      case 'link':
        return (
          <Links
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
            dev={props.dev}
            value={props.value}
            formValue={props.formValue}
            hoverID={props.hoverID}
          />
        );
      case 'list':
        return (
          <List
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
            dev={props.dev}
            value={props.value}
            formValue={props.formValue}
            onMouseUp={props.onMouseUp}
            onMouseMove={props.onMouseMove}
            hoverID={props.hoverID}
            act={props.act}
          />
        );
      case 'accordion':
        return (
          <Accordions
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
            onMouseUp={props.onMouseUp}
            onMouseMove={props.onMouseMove}
            hoverID={props.hoverID}
            dev={props.dev}
            value={props.value}
            formValue={props.formValue}
          />
        );
      case 'form':
        return (
          <Forms
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
            onMouseUp={props.onMouseUp}
            onMouseMove={props.onMouseMove}
            hoverID={props.hoverID}
            formValue={props.formValue}
            dev={props.dev}
            value={props.value}
            act={props.act}
          />
        );
      case 'input':
        return (
          <Inputs
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
            dev={props.dev}
            value={props.value}
            onMouseUp={props.onMouseUp}
            onMouseMove={props.onMouseMove}
            hoverID={props.hoverID}
            formValue={props.formValue}
          />
        );
      case 'select':
        return (
          <Selects
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
            dev={props.dev}
            value={props.value}
            formValue={props.formValue}
          />
        );
      case 'check':
      case 'radio':
        return (
          <Checks
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
            dev={props.dev}
            value={props.value}
            onMouseUp={props.onMouseUp}
            onMouseMove={props.onMouseMove}
            hoverID={props.hoverID}
            formValue={props.formValue}
          />
        );
      case 'tick':
        return (
          <Ticks
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
            dev={props.dev}
            value={props.value}
            onMouseUp={props.onMouseUp}
            onMouseMove={props.onMouseMove}
            hoverID={props.hoverID}
            formValue={props.formValue}
          />
        );
      case 'arrayOfInput':
        return (
          <ArrayOfInputs
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
            dev={props.dev}
            value={props.value}
            onMouseUp={props.onMouseUp}
            onMouseMove={props.onMouseMove}
            hoverID={props.hoverID}
            formValue={props.formValue}
          />
        );
      default: {
        return <>--{JSON.stringify(data)}--</>;
      }
    }
  });
};
export default Body;
