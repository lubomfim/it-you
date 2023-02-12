import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import Button from './index';

describe('Components / Button', () => {
  test('should render component correctly besides on props', () => {
    const fs = jest.fn();
    render(<Button handleClick={fs}>Button</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Button');

    fireEvent.click(button);

    expect(fs).toHaveBeenCalledTimes(1);
  });
});
