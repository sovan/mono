import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Body from './components/Body/Body';
import useBackend from './hooks/useBackend';

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
  const { fetchJSON, createJSON, pageData } = useBackend();

  const [selectedElement, setSelectedElement] = useState<string | undefined>(
    undefined
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLInputElement>) => {
    if (selectedElement) {
      console.log(selectedElement);
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSelectedElement(event.currentTarget.id);
  };

  useEffect(() => {
    fetchJSON('691a720e879c97834f5b3375');
  }, []);

  const handleMouseUp = (event: React.MouseEvent<HTMLInputElement>) => {
    console.log(selectedElement + ' dropped in ' + event.currentTarget.id);
    createJSON(selectedElement, event.currentTarget.id);
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
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        id="Page"
      >
        <Body data={[pageData]} onMouseUp={handleMouseUp} />
      </Col>
    </Row>
  );
};
export default WebFlowDesign;
// /FaArrowsAlt
