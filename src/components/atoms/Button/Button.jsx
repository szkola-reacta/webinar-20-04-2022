// function Button({ label, color, bgColor }){
function Button(props) {
  // props.color
  // props.bgColor

  // standard
  // const label = props.label;
  // const color = props.color;
  // const bgColor = props.bgColor;

  // ES way with destructing
  const { label, color, bgColor, onClick } = props;

  const buttonStyle = {
    color, // color: color,
    backgroundColor: bgColor,
  }

  if (!label) {
    return null;
  }

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  color: '#8BB73B',
}

export { Button };
