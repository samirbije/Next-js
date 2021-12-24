import React from 'react';
import { render, screen } from '@testing-library/react';

import Carousel from '../carousel';

function generateCarouselProps() {
  return {
    data: [
      {
        image: 'some-stat-image-link',
      },
    ],
    height: '100',
  };
}

describe('Carousel', () => {
  it('should rendering without crashing', () => {
    const props = generateCarouselProps();
    render(<Carousel {...props} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
