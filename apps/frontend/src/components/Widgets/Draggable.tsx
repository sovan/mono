import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsUpDownLeftRight,
  faArrowsLeftRight,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

type DraggableProps = {
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement>) => void;
  topM?: number;
  leftM?: number;
  id: string;
  handleMouseUp: string | undefined;
};

const Draggable = ({
  onMouseDown,
  topM = 0,
  leftM = 0,
  id,
  handleMouseUp,
}: DraggableProps) => {
  return (
    <div
      style={{
        border: '1px solid #000',
        marginTop: topM + 'px',
        marginLeft: leftM + 'px',
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
