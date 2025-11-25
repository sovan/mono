import Body from './Body';

const Records = (props: any) => {
  return props.data.map((data: any) => {
    return (
      <tr key="ssoos">
        {data.map((data: any, index: any) => (
          <td key="ssss">{data}</td>
        ))}
        {props.operations && (
          <td key="ssss">
            <Body data={props.operations} />
          </td>
        )}
      </tr>
    );
  });
};
export default Records;
