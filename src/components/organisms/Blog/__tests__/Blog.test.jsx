import { render, screen } from '@testing-library/react';

import { Blog } from '../Blog';

describe("Blog component", () => {
  test("Should display two posts", async () => {
    render(<Blog />);

    await screen.findByText("Post 1");
  });
});