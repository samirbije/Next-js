import React from 'react';
import { render, screen } from '@testing-library/react';

import { ItemList, ItemListProps } from '../itemList';
import { generateItemCollection } from '../../../entities/items/__tests__/items.test';
import { generateCategoryCollection } from '../../../entities/categories/__tests__/categories.test';

export function generateItemListProps(): ItemListProps {
  return {
    items: generateItemCollection(),
    categories: generateCategoryCollection(),
  };
}

describe('ItemList', () => {
  it('should rendering without crashing', () => {
    const { items, categories } = generateItemListProps();
    render(<ItemList items={items} categories={categories} />);

    expect(screen.getByRole('heading', { name: '出品' })).toBeInTheDocument();
  });
});
