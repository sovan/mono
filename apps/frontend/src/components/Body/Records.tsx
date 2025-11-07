import Body from "./Body";

const Records = (props: any) => {
  return props.data.map((data: any) => {
    return (
      <tr key="ssoos">
        {data.map((data: any, index: any) => (
          <>
            <td key="ssss">{data}</td>
            {index === props.data.length - 1 && (
              <td key="ssss">
                <Body data={props.operations.contains} />
              </td>
            )}
          </>
        ))}
      </tr>
    );
  });
};
export default Records;
