import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Body from './components/Body/Body';
import useBackend from './hooks/useBackend';
import Modals from './components/Others/Modals';

const WebFlowDesign = () => {
  const widget = [
    'Container',
    'Row',
    'Column',
    'Text',
    'Button',
    'Form',
    'Text Input',
    'Password Input',
    'Text Area',
    'Drop Down',
    'Check Box',
    'Radio',
    'Accordians',
    'List',
  ];
  const { fetchJSON, createJSON, pageData, isCreated } = useBackend();
  const [selectedElement, setSelectedElement] = useState<string | undefined>(
    undefined
  );
  const [openModal, setOpenModal] = useState<boolean>(true);
  let droppedID = '';

  const handleMouseDown = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSelectedElement(event.currentTarget.id);
  };

  useEffect(() => {
    if (isCreated) {
      fetchJSON('691b21ed8c559d22d4aeaf5c');
    }
  }, [isCreated]);

  const handleMouseUp = (event: React.MouseEvent<HTMLInputElement>) => {
    if (!droppedID) {
      droppedID = event.currentTarget.id;
      switch (selectedElement) {
        case 'Column':
          setOpenModal(true);
          break;
        default:
          createJSON(selectedElement, event.currentTarget.id);
      }

      setTimeout(() => {
        droppedID = '';
      }, 100);
    }
    setSelectedElement(undefined);
  };

  return (
    <Row>
      <Col xs="2">
        {widget.map((eachWidget) => (
          <div id={eachWidget} onMouseDown={handleMouseDown}>
            {eachWidget}
          </div>
        ))}
      </Col>
      <Col
        xs="8"
        style={{ border: '1px solid #f00' }}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        id="Page"
      >
        <Body data={[pageData]} onMouseUp={handleMouseUp} />
      </Col>
      <Modals show={openModal} />
    </Row>
  );
};
export default WebFlowDesign;
