import React from 'react';
import { render, screen } from '@testing-library/react';

import ItemCard, { ItemCardProps } from '../itemCard';
import { generateItemEntity } from '../../../entities/items/__tests__/items.test';

function generateItemCardProps(): ItemCardProps {
  return {
    item: generateItemEntity(),
    handleCardClick: jest.fn(),
  };
}

describe('ItemCard', () => {
  it('should rendering without crashing', () => {
    const props = generateItemCardProps();
    render(<ItemCard {...props} />);

    expect(screen.getByText('men1')).toBeInTheDocument();
  });
});
