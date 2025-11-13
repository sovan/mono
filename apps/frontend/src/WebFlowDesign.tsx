import { useState } from 'react';
import { Draggable } from './components/Widgets';

const WebFlowDesign = () => {
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);

  const [selectedElement, setSelectedElement] = useState<string | undefined>(
    undefined
  );
  const handleMouseMove = (event: React.MouseEvent<HTMLInputElement>) => {
    if (selectedElement) {
      setTop(event.clientY - 60);
      setLeft(event.clientX);
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSelectedElement(event.currentTarget.id);
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLInputElement>) => {
    setSelectedElement(undefined);
  };

  return (
    <div
      style={{ width: '80%', border: '1px solid #f00', height: '500px' }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Draggable
        onMouseDown={handleMouseDown}
        top={top}
        left={left}
        id="sovan1"
      />
      <Draggable
        onMouseDown={handleMouseDown}
        top={top}
        left={left}
        id="sovan2"
      />
    </div>
  );
};
export default WebFlowDesign;
// /FaArrowsAlt
