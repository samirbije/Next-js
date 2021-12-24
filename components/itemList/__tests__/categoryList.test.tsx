import React from 'react';
import { render, screen } from '@testing-library/react';

import CategoryList, { CategoryListProps } from '../categoryList';
import {
  generateCategoryCollection,
  mockCategoryList,
} from '../../../entities/categories/__tests__/categories.test';

function generateCategoryListProps(): CategoryListProps {
  return {
    categoryList: generateCategoryCollection(mockCategoryList).data,
    activeTab: 1,
    handleChangeActiveTab: jest.fn(),
  };
}

describe('CategoryList', () => {
  it('should rendering without crashing', () => {
    const props = generateCategoryListProps();
    render(<CategoryList {...props} />);

    expect(screen.getByRole('tab', { name: 'インテリア' })).toBeInTheDocument();
  });
});
