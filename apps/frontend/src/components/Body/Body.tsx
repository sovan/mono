import Contains from "./Contains";
import Rows from "./Rows";
import Cols from "./Cols";
import Text from "./Text";
import Buttons from "./Buttons";
import List from "./List";
import Links from "./Links";
import Accordions from "./Accordions";
import Forms from "./Forms";
import Inputs from "./Inputs";
import Selects from "./Selects";
import Checks from "./Checks";
import Ticks from "./Ticks";
const Body = (props: any) => {
  return props.data.map((data: any) => {
    switch (data.type) {
      case "container":
        return (
          <Contains
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
          />
        );
      case "row":
        return (
          <Rows
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
          />
        );
      case "col":
        return (
          <Cols
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
          />
        );
      case "text":
        return (
          <Text
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
          />
        );
      case "button":
        return (
          <Buttons
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
          />
        );
      case "link":
        return (
          <Links
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
          />
        );
      case "list":
        return (
          <List
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
          />
        );
      case "accordion":
        return (
          <Accordions
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
          />
        );
      case "form":
        return (
          <Forms
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
          />
        );
      case "input":
        return (
          <Inputs
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
          />
        );
      case "select":
        return (
          <Selects
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
          />
        );
      case "check":
      case "radio":
        return (
          <Checks
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
          />
        );
      case "tick":
        return (
          <Ticks
            data={data}
            dataExchange={props.dataExchange}
            params={props.params}
          />
        );
      default: {
        return <>--{JSON.stringify(data)}--</>;
      }
    }
  });
};
export default Body;
