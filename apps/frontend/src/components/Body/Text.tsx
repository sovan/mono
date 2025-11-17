const Text = (props: any) => {
  return (
    <div key={props.data._id} id={props.data._id}>
      {props.data.text}
    </div>
  );
};
export default Text;
