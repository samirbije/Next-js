import React from 'react';
import { render, screen } from '@testing-library/react';

import ItemDetailTopNavBar, { TopNavBarProps } from '../itemDetailTopNavBar';
import { generateItemEntity } from '../../../entities/items/__tests__/items.test';

function generateItemDetailProps(): TopNavBarProps {
  return {
    item: generateItemEntity(),
  };
}

describe('ItemDetailTopNavBar', () => {
  it('should rendering without crashing', () => {
    const props = generateItemDetailProps();
    render(<ItemDetailTopNavBar {...props} />);

    expect(screen.getByText('men1')).toBeInTheDocument();
  });
});
