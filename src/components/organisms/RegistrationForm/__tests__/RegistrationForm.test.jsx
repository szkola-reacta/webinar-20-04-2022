import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { RegistrationForm } from '../RegistrationForm';

describe('Registration form', () => {
  test('should not pass validation', () => {
    render(<RegistrationForm />);

    const emailField = screen.getByRole('textbox', { name: /e\-mail:/i });
    userEvent.type(emailField, "ala ma kota");

    screen.getByText(/email is invalid/i);
  });
});