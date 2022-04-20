import { screen, render } from '@testing-library/react';

import { Text } from '../Text';

describe('Text component', () => {
  test('should have Lorem ipsum', () => {
    render(<Text>Lorem ipsum</Text>);

    // getByText("Lorem ipsum!");
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.queryByText("Loading...")).toBe(null);

    // awiat findByText("Loading...")
  });
});