import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { ItemDetailPage } from '../[id]';
import { generateItemListProps } from '../../../src/components/itemList/__tests__/itemList.test';

describe('ItemDetailPage', () => {
  it('should rendering without crashing', async () => {
    const { items } = generateItemListProps();
    render(<ItemDetailPage items={items} />);

    await waitFor(() => {
      expect(screen.getByText('Purchase')).toBeInTheDocument();
    });
  });
});
