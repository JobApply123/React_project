import React from 'react';
import { render, fireEvent , screen} from '@testing-library/react';
import Login from './Component/SigninSignup/Login';

describe('Login', () => {
  test('validates email input', () => {
render(<Login/>);
    const emailInput = screen.getByLabelText('Email:');

    // Invalid email format
    fireEvent.change(emailInput, { target: { value: 'invalid_email' } });
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();

    // Valid email format
    fireEvent.change(emailInput, { target: { value: 'valid@example.com' } });
    expect(screen.getByText('Please enter a valid email address.')).not.toBeInTheDocument();
  });

  test('validates password input', () => {
    render(<Login/>);
    const passwordInput = screen.getByLabelText('Password:');
    // Invalid password (less than 6 characters)
    fireEvent.change(passwordInput, { target: { value: '12345' } });
    expect(screen.getByText('Password must be at least 6 characters long.')).toBeInTheDocument();

    // Valid password (at least 6 characters)
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    expect(screen.getByText('Password must be at least 6 characters long.')).not.toBeInTheDocument();
  });
});