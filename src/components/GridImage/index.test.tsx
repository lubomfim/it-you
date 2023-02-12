import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import GridImage from './index';

const mock = {
  photo: 'study.png',
  title: 'Seamless access',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime fuga nostrum ea, tenetur dolorem repellat error nobis odio veritatis, itaque pariatur voluptatibus tempore. Eaque dolorum perferendis culpa tempora placeat natus?',
};

describe('Components / GridImage', () => {
  test('should render component correctly besides on props', () => {
    render(<GridImage card={mock} />);

    const image = screen.getAllByRole('img');
    const title = screen.getByText(mock.title);

    expect(image).toHaveLength(2);
    expect(title).toBeInTheDocument();
  });
});
