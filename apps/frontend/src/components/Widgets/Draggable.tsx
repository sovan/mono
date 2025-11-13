import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsUpDownLeftRight,
  faArrowsLeftRight,
} from '@fortawesome/free-solid-svg-icons';

type DraggableProps = {
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement>) => void;
  top?: number;
  left?: number;
  id: string;
};
const Draggable = ({ onMouseDown, top = 0, left = 0, id }: DraggableProps) => {
  return (
    <div
      style={{
        border: '1px solid #000',
        marginTop: top + 'px',
        marginLeft: left + 'px',
      }}
    >
      <div
        id={id}
        onMouseDown={onMouseDown}
        style={{
          width: '30px',
        }}
      >
        <FontAwesomeIcon icon={faArrowsUpDownLeftRight} />
        <FontAwesomeIcon icon={faArrowsLeftRight} />
      </div>
    </div>
  );
};

export default Draggable;
