import React from 'react';

import Skeleton from '@material-ui/lab/Skeleton';

function ItemDetailSkeleton() {
  return (
    <>
      <Skeleton variant="text" animation="wave" />
      <Skeleton variant="rect" animation="wave" width={210} height={118} />
      <Skeleton variant="text" animation="wave" />
    </>
  );
}

export default ItemDetailSkeleton;
