import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Body from './components/Body/Body';
import useBackend from './hooks/useBackend';
import PropertyBox from './components/Others/PropertyBox';
import { useParams } from 'react-router-dom';
import Widget from './components/Widgets/Widget';
import Modals from './components/Others/Modals';

const WebFlowDesign = () => {
  const params = useParams();

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
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalElement, setModalElement] = useState<string | undefined>(
    undefined
  );

  let droppedID = '';
  let hoverID = '';
  let droppedParent = '';

  const handleMouseDown = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSelectedElement(event.currentTarget.id);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (isCreated) {
      fetchJSON(params.id, 'page');
    }
  }, [isCreated]);

  const handleMouseUp = (event: React.MouseEvent<HTMLInputElement>) => {
    if (!droppedID) {
      droppedID = event.currentTarget.id;
      setOpenProperty(false);
      if (selectedElement === 'Page' && droppedID !== 'Page') {
        fetchJSON(droppedID, 'property');
        setTimeout(() => {
          setOpenProperty(true);
        }, 10);
      } else if (selectedElement === 'Page' && droppedID === 'Page') {
        setOpenProperty(false);
      } else {
        setOpenProperty(false);
        setModalElement(selectedElement);
        if (selectedElement === 'Container') {
          setShowModal(true);
        }
        createJSON(selectedElement, droppedID);
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
    <>
      <Container>
        <Row onMouseMove={handleMouseMove}>
          <Widget onMouseDown={handleMouseDown} />
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
              formValue={() =>
                console.log('Cannot submit for as this is a design frame')
              }
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
      </Container>
      {showModal && (
        <Modals
          show={showModal}
          modalElement={modalElement}
          handleClose={handleClose}
        />
      )}
    </>
  );
};
export default WebFlowDesign;
