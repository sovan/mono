import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Body from './components/Body/Body';

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
  ];
  const [selectedElement, setSelectedElement] = useState<string | undefined>(
    undefined
  );
  const [pageJSON, setPageJSON] = useState<Array<any>>([
    {
      type: 'container',
      id: 'container-1',
      contains: [
        {
          type: 'row',
          id: 'row-1',
          contains: [
            {
              type: 'col',
              size: '6',
              id: 'col-1',
              contains: [
                {
                  type: 'text',
                  text: 'List pages',
                  id: 'text-1',
                },
              ],
            },
            {
              type: 'col',
              size: '6',
              id: 'col-2',
              contains: [
                {
                  type: 'form',
                  id: 'form-1',
                  contains: [],
                },
              ],
            },
            {
              type: 'col',
              size: '6',
              id: 'col-3',
              contains: [
                {
                  type: 'accordion',
                  id: 'accordion-1',
                  contains: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  const handleMouseMove = (event: React.MouseEvent<HTMLInputElement>) => {
    if (selectedElement) {
      console.log('ss');
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSelectedElement(event.currentTarget.id);
    console.log('down' + event.currentTarget.id);
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLInputElement>) => {
    console.log(selectedElement + ' dropped in ' + event.currentTarget.id);
    if (event.currentTarget.id === 'page') {
      switch (selectedElement) {
        case 'Container':
          setPageJSON([
            {
              type: 'container',
              id: 'container-1',
              contains: [],
            },
          ]);
          break;
        case 'Row':
          setPageJSON([
            {
              type: 'container',
              id: 'container-1',
              contains: [
                {
                  type: 'row',
                  id: 'row-1',
                  contains: [],
                },
              ],
            },
          ]);
          break;
        case 'Column':
          setPageJSON([
            {
              type: 'container',
              id: 'container-1',
              contains: [
                {
                  id: 'row-1',
                  type: 'row',
                  contains: [
                    {
                      type: 'col',
                      size: '6',
                      contains: [],
                      id: 'col-1',
                    },
                    {
                      type: 'col',
                      size: '6',
                      contains: [],
                      id: 'col-2',
                    },
                  ],
                },
              ],
            },
          ]);
          break;
        default:
          console.log('Switch is not yet created');
      }
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
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        id="page"
      >
        <Body data={pageJSON} onMouseUp={handleMouseUp} />
      </Col>
    </Row>
  );
};
export default WebFlowDesign;
// /FaArrowsAlt
