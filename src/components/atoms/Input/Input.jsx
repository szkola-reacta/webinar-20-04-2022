import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  const { label } = props;
  return (
    <div>
      <label>{label}</label>
      <input type="text" ref={ref} />
    </div>
  );
});

export { Input };
