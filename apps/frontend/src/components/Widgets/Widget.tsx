import { Col } from 'react-bootstrap';

const Widget = (props: any) => {
  const widgets = [
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
    'Tick',
  ];

  return (
    <Col xs="2" style={{ border: '1px solid #f00', borderRight: '0px' }}>
      {widgets.map((eachWidget) => (
        <Col id={eachWidget} onMouseDown={props.onMouseDown} key={eachWidget}>
          {eachWidget}
        </Col>
      ))}
    </Col>
  );
};
export default Widget;
