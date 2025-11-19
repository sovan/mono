const Text = (props: any) => {
  return (
    <div key={props.data._id} id={props.data._id} onMouseUp={props.onMouseUp}>
      {props.data.text}
    </div>
  );
};
export default Text;
