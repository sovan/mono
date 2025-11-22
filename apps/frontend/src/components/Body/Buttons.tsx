import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Buttons = (props: any) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (props.data.act === 'link') navigate(props.data.linkTo);
    if (props.data.act === 'delete') props.act('delete');
  };
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={'tooltip' + props.data._id}>Button</Tooltip>}
      show={props.hoverID === props.data._id && props.dev}
    >
      <Button
        key="button"
        type={'submit'}
        onClick={handleClick}
        onMouseUp={props.onMouseUp}
        onMouseMove={props.onMouseMove}
      >
        {props.data.buttonText}
      </Button>
    </OverlayTrigger>
  );
};
export default Buttons;
