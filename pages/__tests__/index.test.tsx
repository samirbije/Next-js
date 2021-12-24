import React from 'react';
import { render, screen } from '@testing-library/react';

import { ItemListPage } from '../index';
import { generateItemListProps } from '../../src/components/itemList/__tests__/itemList.test';

describe('ItemListPage', () => {
  it('should rendering without crashing', () => {
    const props = generateItemListProps();
    render(<ItemListPage {...props} />);

    expect(screen.getByRole('heading', { name: '出品' })).toBeInTheDocument();
  });
});
