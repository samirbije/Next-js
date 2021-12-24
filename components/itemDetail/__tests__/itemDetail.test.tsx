import React from 'react';
import { render, screen } from '@testing-library/react';

import ItemDetail, { ItemDetailProps } from '../itemDetail';
import { generateItemEntity } from '../../../entities/items/__tests__/items.test';

export function generateItemDetailProps(): ItemDetailProps {
  return {
    item: generateItemEntity(),
  };
}

describe('ItemDetail', () => {
  it('should rendering without crashing', () => {
    const props = generateItemDetailProps();
    render(<ItemDetail {...props} />);

    expect(screen.getAllByText('men1').length).toBeGreaterThan(1);
  });
});
