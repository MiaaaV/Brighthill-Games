import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react';
import '@testing-library/jest-dom/extend-expect';
import Forms from './Forms';

test('Typing in the name input updates the state', async () => {
  const { container } = render(<Forms formData={{}} handleChange={() => { }} handleFileChange={() => { }} />);
  const nameInput = container.querySelector('#name');

  await act(async () => {
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  });

  await waitFor(() => {
    expect(nameInput.value).toBe('John Doe');
  });
});

test('Typing in the phone input updates the state', async () => {
  const { container } = render(<Forms formData={{}} handleChange={() => { }} handleFileChange={() => { }} />);
  const phoneInput = container.querySelector('#phone');

  await act(async () => {
    fireEvent.change(phoneInput, { target: { value: '+1234567890' } });
  });

  await waitFor(() => {
    expect(phoneInput.value).toBe('+1234567890');
  });
});

test('Typing in the email input updates the state', async () => {
  const { container } = render(<Forms formData={{}} handleChange={() => { }} handleFileChange={() => { }} />);
  const emailInput = container.querySelector('#email');

  await act(async () => {
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
  });

  await waitFor(() => {
    expect(emailInput.value).toBe('john.doe@example.com');
  });
});

test('Submitting the form shows the thank you message', async () => {
  const { getByText, container } = render(<Forms formData={{}} handleChange={() => { }} handleFileChange={() => { }} />);

  const nameInput = container.querySelector('#name');
  const phoneInput = container.querySelector('#phone');
  const emailInput = container.querySelector('#email');
  const submitButton = getByText('Apply');

  await act(async () => {
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(phoneInput, { target: { value: '+1234567890' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.click(submitButton);
  });

  await waitFor(() => {
    expect(getByText('Thank you for applying!')).toBeInTheDocument();
  });
});
