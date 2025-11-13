type DraggableProps = {
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement>) => void;
  top?: number;
  left?: number;
};
const Draggable = ({ onMouseDown, top = 0, left = 0 }: DraggableProps) => {
  return (
    <div
      onMouseDown={onMouseDown}
      role="ss"
      id="sovan"
      style={{
        border: '1px solid #000',
        marginTop: top + 'px',
        marginLeft: left + 'px',
      }}
    >
      ss
    </div>
  );
};

export default Draggable;
