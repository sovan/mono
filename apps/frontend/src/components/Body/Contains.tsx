import { Container } from 'react-bootstrap';
import Body from './Body';
import { devContainer, productionStyle, devHoverContainer } from '../../styles';

const Contains = (props: any) => {
  const style = () => {
    if (props.dev) {
      if (props.hoverID === props.data._id) {
        return devHoverContainer;
      } else {
        return devContainer;
      }
    } else {
      return productionStyle;
    }
  };

  return (
    <Container
      onMouseUp={props.onMouseUp}
      onMouseMove={props.onMouseMove}
      style={style()}
      id={props.data._id}
    >
      <Body
        data={props.data.contains}
        dataExchange={props.dataExchange}
        params={props.params}
        onMouseUp={props.onMouseUp}
        onMouseMove={props.onMouseMove}
        hoverID={props.hoverID}
        formValue={props.formValue}
        act={props.act}
        dev={props.dev}
      />
    </Container>
  );
};
export default Contains;
