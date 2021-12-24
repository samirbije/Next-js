import React from 'react';
import { useRouter } from 'next/router';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import PublishIcon from '@material-ui/icons/Publish';

import { InterfaceItemEntity } from 'src/entities/items/items';

export interface TopNavBarProps {
  item: InterfaceItemEntity;
}

const TopNavBar = React.memo(function TopNavBar(props: TopNavBarProps) {
  const router = useRouter();
  const { item } = props;

  const handleBackButtonClick = () => {
    router.back();
  };

  const menuId = 'item-detail-top-nav-bar';
  return (
    <Toolbar>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        flex="1 auto"
      >
        <Box alignItems="center" display="flex">
          <IconButton
            color="inherit"
            aria-label="back button"
            onClick={handleBackButtonClick}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h4" display="inline" color="textPrimary">
            <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
              {item.name}
            </Box>
          </Typography>
        </Box>

        <Box alignItems="center" display="flex">
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            color="inherit"
          >
            <PublishIcon />
          </IconButton>
        </Box>
      </Box>
    </Toolbar>
  );
});

export default TopNavBar;
