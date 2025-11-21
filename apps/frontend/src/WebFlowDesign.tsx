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
    'Accordian',
    'List',
  ];
  const {
    fetchJSON,
    createJSON,
    pageData,
    isCreated,
    propertyData,
    updateJSON,
    deleteJSON,
  } = useBackend();
  const [selectedElement, setSelectedElement] = useState<string | undefined>(
    undefined
  );
  const [openProperty, setOpenProperty] = useState<boolean>(false);
  const [parentData, setParentData] = useState<string>('');
  const [mouseHoverID, setMouseHoverID] = useState<string>('');

  let droppedID = '';
  let hoverID = '';
  let droppedParent = '';

  const handleMouseDown = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSelectedElement(event.currentTarget.id);
  };

  useEffect(() => {
    if (isCreated) {
      fetchJSON('6920eda279f2d090bce0bd97', 'page');
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
    } else if (!droppedParent) {
      droppedParent = event.currentTarget.id;
      setParentData(droppedParent);
    }
    setSelectedElement(undefined);
  };

  const handleForm = (formValue: any) => {
    updateJSON(formValue, propertyData);
  };
  const handleAction = (acion: any) => {
    if (acion === 'delete') {
      deleteJSON(propertyData, parentData);
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLInputElement>) => {
    if (!hoverID) {
      hoverID = event.currentTarget.id;
      setMouseHoverID(hoverID);
      setTimeout(() => {
        hoverID = '';
      }, 100);
    }
  };

  return (
    <Row style={{ margin: '5px' }} onMouseMove={handleMouseMove}>
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
        <Body
          data={[pageData]}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          hoverID={mouseHoverID}
          dev={true}
          key={'page'}
        />
      </Col>
      {openProperty && (
        <Col xs="2" style={{ border: '1px solid #f00', borderLeft: '0px' }}>
          <PropertyBox
            data={propertyData}
            formValue={handleForm}
            act={handleAction}
          />
        </Col>
      )}
    </Row>
  );
};
export default WebFlowDesign;
