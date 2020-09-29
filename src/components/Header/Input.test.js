import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('when <Input /> renders', () => {
  it('should render an input', () => {
    const { getByPlaceholderText } = render(<Input />);
    const InputElement = getByPlaceholderText(/enter an ip address/i);
    expect(InputElement).toBeInTheDocument();
  });

  it('should render a button', () => {
    const { getByRole } = render(<Input />);
    const Button = getByRole('button');
    expect(Button).toBeInTheDocument();
  });

  describe('when the ipValue is empty', () => {
    it('should disable the button', () => {
      const { getByRole } = render(<Input ipValue="" />);
      const Button = getByRole('button');
      expect(Button).toBeDisabled();
    });
  });

  describe('when the ipValue is set', () => {
    const mockValue = 'abc';

    it('should contain the text with the value typed', () => {
      const { getByPlaceholderText } = render(<Input ipValue={mockValue} />);
      const InputElement = getByPlaceholderText(/enter an ip address/i);
      expect(InputElement.value).toBe(mockValue);
    });

    it('should enable the button', () => {
      const { getByRole } = render(<Input ipValue={mockValue} />);
      const Button = getByRole('button');
      expect(Button).toBeEnabled();
    });

    describe('and the button is clicked', () => {
      it('should call the onClick handler', () => {
        const mockOnClick = jest.fn();
        const { getByRole } = render(
          <Input ipValue={mockValue} onClick={mockOnClick} />
        );
        const Button = getByRole('button');
        userEvent.click(Button);
        expect(mockOnClick).toBeCalled();
      });
    });
  });

  describe('when the user types', () => {
    it('should call the function setIpValue', () => {
      const mockOnChange = jest.fn();
      const { getByPlaceholderText } = render(
        <Input setIpValue={mockOnChange} />
      );
      const InputElement = getByPlaceholderText(/enter an ip address/i);
      userEvent.type(InputElement, 'a');
      expect(mockOnChange).toBeCalled();
    });
  });
});
