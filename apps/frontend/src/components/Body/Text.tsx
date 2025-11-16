const Text = (props: any) => {
  return (
    <div key={props.data.id} id={props.data.id}>
      {props.data.text}
    </div>
  );
};
export default Text;
