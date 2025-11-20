import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Buttons = (props: any) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (props.data.act === 'link') navigate(props.data.linkTo);
    if (props.data.act === 'delete') props.act('delete');
  };
  return (
    <Button
      key="button"
      type={props.data.buttonType}
      onClick={handleClick}
      onMouseUp={props.onMouseUp}
    >
      {props.data.buttonText}
    </Button>
  );
};
export default Buttons;
