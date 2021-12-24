import React from 'react';
import { getSnapshot } from 'mobx-state-tree';
import { inject, observer } from 'mobx-react';

import { initializeStore } from '../src/setUpStore';
import ItemList from '../src/components/itemList/itemList';

export function ItemListPage(props) {
  return <ItemList {...props} />;
}

export async function getServerSideProps() {
  const store = initializeStore();
  const { categories, items } = store;

  try {
    await categories.getAllCategories();
    await items.getAllItems();
  } catch (err) {
    console.log('Your server may not be active. Please start the server.');
    console.log('Handle Error Message=====', err);
  }
  // Pass data to the page via props
  // rootStore should always be passed in getSnapshot to work property
  return {
    props: {
      initialState: getSnapshot(store),
    },
  };
}

export default inject('categories', 'items')(observer(ItemListPage));
