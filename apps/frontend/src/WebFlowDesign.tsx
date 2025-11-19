import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Body from './components/Body/Body';
import useBackend from './hooks/useBackend';
import PropertyBox from './components/Others/PropertyBox';

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
  const {
    fetchJSON,
    createJSON,
    pageData,
    isCreated,
    propertyData,
    updateJSON,
  } = useBackend();
  const [selectedElement, setSelectedElement] = useState<string | undefined>(
    undefined
  );
  const [openProperty, setOpenProperty] = useState<boolean>(false);
  let droppedID = '';

  const handleMouseDown = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSelectedElement(event.currentTarget.id);
  };

  useEffect(() => {
    if (isCreated) {
      fetchJSON('691bb503afbf3054c2c37298', 'page');
    }
  }, [isCreated]);

  const handleMouseUp = (event: React.MouseEvent<HTMLInputElement>) => {
    if (!droppedID) {
      droppedID = event.currentTarget.id;
      console.log(droppedID, selectedElement);
      if (selectedElement === 'Page' && droppedID !== 'Page') {
        fetchJSON(droppedID, 'property');
        setOpenProperty(true);
      } else if (selectedElement === 'Page' && droppedID === 'Page') {
        setOpenProperty(false);
      } else {
        setOpenProperty(false);
        switch (selectedElement) {
          default:
            createJSON(selectedElement, event.currentTarget.id);
        }
      }
      setTimeout(() => {
        droppedID = '';
      }, 100);
    }
    setSelectedElement(undefined);
  };

  const handleForm = (formValue: any) => {
    updateJSON(formValue, propertyData);
  };

  return (
    <Row style={{ margin: '5px' }}>
      <Col xs="2" style={{ border: '1px solid #f00', borderRight: '0px' }}>
        {widget.map((eachWidget) => (
          <Col id={eachWidget} onMouseDown={handleMouseDown} key={eachWidget}>
            {eachWidget}
          </Col>
        ))}
      </Col>
      <Col
        xs={openProperty ? 8 : 10}
        style={{ border: '1px solid #f00' }}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        id="Page"
      >
        <Body data={[pageData]} onMouseUp={handleMouseUp} />
      </Col>
      {openProperty && (
        <Col xs="2" style={{ border: '1px solid #f00', borderLeft: '0px' }}>
          <PropertyBox data={propertyData} formValue={handleForm} />
        </Col>
      )}
    </Row>
  );
};
export default WebFlowDesign;
