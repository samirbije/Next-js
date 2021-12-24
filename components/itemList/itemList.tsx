import React, { useCallback } from 'react';
import map from 'ramda/src/map';
import { useRouter } from 'next/router';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CameraAltRoundedIcon from '@material-ui/icons/CameraAltRounded';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Divider from '@material-ui/core/Divider';

import { InterfaceCategoryCollection } from 'src/entities/categories/categories';
import { InterfaceItemCollection } from 'src/entities/items/items';
import TopNavBar from './topNavBar';
import CategoryList from './categoryList';
import ItemCard from './itemCard';
import ScrollToTop from '../common/scrollWrapper';

const useStyles = makeStyles((theme) => ({
  cameraIconContainer: {
    position: 'fixed',
    right: '-14px',
    bottom: '-14px',
    textAlign: 'center',
    zIndex: 2,
    borderRadius: '50%',
    paddingTop: '15px',
    height: '100px',
    width: '100px',
    backgroundColor: '#ea352d',
  },

  scrollToTopContainer: {
    marginTop: theme.typography.pxToRem(16),
    position: 'absolute',
    left: '50%',
    transform: `translateX(-50%)`,
  },

  scrollToTop: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    textTransform: 'unset',
  },
}));

export interface ItemListProps {
  items: InterfaceItemCollection;
  categories: InterfaceCategoryCollection;
}

export function ItemList(props: ItemListProps) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  const [activeTab, setActiveTab] = React.useState(1);
  const classes = useStyles();
  const router = useRouter();

  const handleChangeActiveTab = useCallback(
    (event: React.ChangeEvent, newActiveTab: number) => {
      setActiveTab(newActiveTab);
    },
    []
  );

  const redirectToDetailPage = useCallback(
    (itemId: number) => () => {
      return router.push(`/items/${itemId}`);
    },
    [router]
  );

  const { categories, items } = props;

  return (
    <>
      <AppBar position="fixed">
        <Box bgcolor="background.paper" color="text.secondary">
          <TopNavBar />

          <Divider />

          <Container maxWidth={isLargeScreen ? 'md' : 'sm'}>
            <CategoryList
              categoryList={categories.data}
              activeTab={activeTab}
              handleChangeActiveTab={handleChangeActiveTab}
            />
          </Container>

          <ScrollToTop smooth className={classes.scrollToTopContainer}>
            <Button
              variant="contained"
              style={{ borderRadius: 40 }}
              startIcon={<ArrowUpwardIcon color="primary" />}
              className={classes.scrollToTop}
            >
              Go to Top
            </Button>
          </ScrollToTop>
        </Box>
      </AppBar>

      <>
        <Toolbar />
        <Toolbar />
      </>

      <Container maxWidth={isLargeScreen ? 'md' : 'sm'}>
        <Box position="relative" width="1">
          <Grid container spacing={2}>
            {map((item) => {
              return (
                <Grid item xs={6} md={4} key={`item_${item.id}`}>
                  <ItemCard
                    item={item}
                    handleCardClick={redirectToDetailPage(item.id)}
                  />
                </Grid>
              );
            }, items.filteredItemsForActiveTab(activeTab + 1))}
          </Grid>

          <Box color="background.paper" className={classes.cameraIconContainer}>
            <Typography variant="subtitle1">出品</Typography>
            <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              color="inherit"
              style={{ padding: 0 }}
            >
              <CameraAltRoundedIcon style={{ fontSize: '36px' }} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default ItemList;
