export const ShoutButton = (props) => {
  console.log(props);
  return (
    <button onClick={() => props.handleClick(props.char)}>{props.char}</button>
  );
}
