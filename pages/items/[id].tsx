import React, { useEffect, useState } from 'react';
import { getSnapshot } from 'mobx-state-tree';
import { inject, observer } from 'mobx-react';
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';

import { initializeStore } from '../../src/setUpStore';
import ItemDetail from '../../src/components/itemDetail/itemDetail';
import { InterfaceItemCollection } from '../../src/entities/items/items';

interface ItemDetailPageProps {
  items: InterfaceItemCollection;
}

export function ItemDetailPage(props: ItemDetailPageProps) {
  const [item, setItem] = useState(null);
  const router = useRouter();
  const id = router?.query?.id;

  const { items } = props;
  useEffect(() => {
    async function fetchItemDetail() {
      const item = await items.getItemById(Number(id));
      setItem(item);
    }
    fetchItemDetail();
  }, [id, items]);

  return <ItemDetail item={item} />;
}

export async function getServerSideProps(context: NextPageContext) {
  const store = initializeStore();

  const { query } = context;
  const { id } = query;
  try {
    await store.items.getItemById(Number(id));
  } catch (err) {
    console.log('Please start the server.');
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

export default inject('items')(observer(ItemDetailPage));
