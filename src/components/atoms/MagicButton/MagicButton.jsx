import { forwardRef } from 'react';

const MagicButton = forwardRef((props, ref) => {
  const { children, color, bgColor, onClick, onMouseEnter, onMouseLeave } = props;

  const buttonStyle = {
    color, // color: color,
    backgroundColor: bgColor,
  }

  return (
    <button
      ref={ref}
      style={buttonStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}>
      {children}
    </button>
  );
})

MagicButton.defaultProps = {
  color: "black",
}

export { MagicButton };
