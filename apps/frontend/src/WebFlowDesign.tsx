import { DndContext } from '@dnd-kit/core';

import { Draggable, Droppable, ResizableBox } from './components/Widgets';

import { useState } from 'react';

const WebFlowDesign = () => {
  const [parent, setParent] = useState<string[]>([]);
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Draggable id="draggable">Drag me</Draggable>

      <Droppable key={'droppable'} id={'droppable'}>
        {parent.map((id) => {
          return <ResizableBox key={id} />;
        })}
      </Droppable>
    </DndContext>
  );

  function handleDragEnd(event: { over: any }) {
    const { over } = event;
    setParent([...parent, ...[over.id]]);
  }
};
export default WebFlowDesign;
