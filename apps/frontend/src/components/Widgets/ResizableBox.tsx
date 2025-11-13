import { Resizable } from 're-resizable';

const ResizableBox = (props: any) => {
  return (
    <Resizable
      defaultSize={{
        width: 320,
        height: 200,
      }}
      style={{ border: '1px solid #000' }}
    >
      Sample with default size
    </Resizable>
  );
};

export default ResizableBox;
