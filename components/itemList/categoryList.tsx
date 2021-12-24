import React from 'react';
import map from 'ramda/src/map';

import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { IntefaceCategoryEntity } from 'src/entities/categories/categories';

export interface CategoryListProps {
  categoryList: IntefaceCategoryEntity[];
  activeTab: number;
  handleChangeActiveTab: (
    event: React.ChangeEvent,
    newActiveTab: number
  ) => void;
}

const CategoryList = React.memo(function CategoryList(
  props: CategoryListProps
) {
  const { categoryList, activeTab, handleChangeActiveTab } = props;

  return (
    <Box flexGrow={1}>
      <Tabs
        value={activeTab}
        onChange={handleChangeActiveTab}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable category list"
      >
        {map((category) => {
          return (
            <Tab
              key={`category_${category.id}`}
              label={category.name}
              id={`scrollable-tabpanel-${category.id}`}
              aria-controls={`scrollable-tabpanel-${category.id}`}
            />
          );
        }, categoryList)}
      </Tabs>
    </Box>
  );
});

export default CategoryList;
