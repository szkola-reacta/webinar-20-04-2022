import { useEffect, useRef } from 'react';

import { MagicButton } from 'components/atoms/MagicButton';
import { Text } from 'components/atoms/Text';

function ButtonRow() {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#c0392b";
    }
  }, []);

  const handleOnMouseEnter = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#8BB73B";
    }
  }

  const handleOnMouseLeave = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#184689";
    }
  }

  return (
    <div>
      <Text>Button row</Text>
      <MagicButton
        ref={buttonRef}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        Click me!
      </MagicButton>
    </div>
  );
}

export { ButtonRow };
