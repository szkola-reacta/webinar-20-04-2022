import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button, Text } from 'components/atoms';

function Generator() {
  // let uuid = uuidv4();
  const [id, setId] = useState(uuidv4()); // -> [0, 1]
  // const [value, setValue] = useState(1_000); // -> [0, 1]

  const handleClick = () => {
    // console.log('Event: ', event);
    // uuid = uuidv4();
    setId(uuidv4());
  }

  return (
    <>
      <Text>Your UUID is: {id}</Text>
      <Button label="Refresh" onClick={handleClick} />
      {/* <Button label="Refresh" onClick={() => handleClick()} /> */}
      {/* <Button label="Refresh" setId={setId} /> */}
    </>
  );
}

// const Generator = (props) => (
//   <div>
//     <p>Your UUID is: {props.id} </p>
//   </div>
// );

export { Generator };
