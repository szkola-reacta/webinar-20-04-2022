import { render } from '@testing-library/react';

import { Text } from '../Text';

describe('Text component', () => {
  test('should have Lorem ipsum', () => {
    const { debug, getByText, queryByText } = render(<Text>Lorem ipsum</Text>);
    // getByText("Lorem ipsum!");
    expect(getByText("Lorem ipsum")).toBeInTheDocument();
    expect(queryByText("Loading...")).toBe(null);

    // awiat findByText("Loading...")

    debug();
  });
});