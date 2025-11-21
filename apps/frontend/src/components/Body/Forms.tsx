import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Body from './Body';
import {
  productionStyle,
  devHoverContainer,
  developmentStyle,
} from '../../styles';
const Forms = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    shouldFocusError: true,
    mode: 'onTouched',
  });
  const style = () => {
    if (props.dev) {
      if (props.hoverID === props.data._id) {
        return devHoverContainer;
      } else {
        return developmentStyle;
      }
    } else {
      return productionStyle;
    }
  };
  const onSubmit = async (data: any) => {
    props.formValue(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} style={style()}>
      <Body
        data={props.data.contains}
        dataExchange={{ touchedFields, errors, register }}
        act={props.act}
        dev={props.dev}
      />
    </Form>
  );
};
export default Forms;
