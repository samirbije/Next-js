import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import FlagIcon from '@material-ui/icons/Flag';
import Carousel from '../common/carousel';

import { InterfaceItemEntity } from 'src/entities/items/items';
import TopNavBar from './itemDetailTopNavBar';
import ItemDetailSkeleton from './itemDetailSkeleton';

const useStyles = makeStyles((theme) => ({
  bottomBar: {
    top: 'unset',
    bottom: 0,
  },

  container: {
    padding: 0,
    height: `calc(100vh - 56px * 2)`,

    [theme.breakpoints.up('sm')]: {
      height: `calc(100vh - 66px * 2)`,
    },
  },
}));

export interface ItemDetailProps {
  item: InterfaceItemEntity;
}

export function ItemDetail(props: ItemDetailProps) {
  const classes = useStyles();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  const { item } = props;

  if (!item) {
    return <ItemDetailSkeleton />;
  }

  return (
    <>
      <AppBar color="default">
        <Box bgcolor="background.paper" color="text.secondary">
          <TopNavBar item={item} />
        </Box>
      </AppBar>

      <Toolbar />

      <Container
        maxWidth={isLargeScreen ? 'md' : 'sm'}
        classes={{ root: classes.container }}
      >
        <Box
          width="1"
          height="1"
          position="relative"
          bgcolor="background.paper"
        >
          <Carousel
            data={[
              {
                image: item.image,
              },
            ]}
          />

          <Box py="8px" px={2}>
            <Typography variant="h5" paragraph>
              {item.name}
            </Typography>

            <Box
              alignItems="center"
              display="flex"
              justifyContent="space-between"
            >
              <Box alignItems="center" display="flex" flex="1 auto">
                <Box alignItems="center" display="flex" mr={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<FavoriteBorderIcon />}
                    style={{ borderRadius: 40 }}
                  >
                    Like
                  </Button>
                  &nbsp;
                  {item.likeCount > 0 && (
                    <Typography>{item.likeCount}</Typography>
                  )}
                </Box>

                <Box alignItems="center" display="flex">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<CommentIcon />}
                    style={{ borderRadius: 40 }}
                  >
                    Comment
                  </Button>
                  &nbsp;
                  {item.commentCount > 0 && (
                    <Typography>{item.commentCount}</Typography>
                  )}
                </Box>
              </Box>

              <FlagIcon />
            </Box>
          </Box>

          <>
            <Box bgcolor="background.default" p={`16px 16px 4px 16px`}>
              <Typography variant="h5">Item Description</Typography>
            </Box>

            <Box py="8px" px={2}>
              <Typography variant="h5">{item.description}</Typography>
            </Box>
          </>
        </Box>
      </Container>

      <Box height="68px" />

      <AppBar
        position="fixed"
        classes={{ root: classes.bottomBar }}
        color="default"
        elevation={0}
      >
        <Box
          height="68px"
          px={{ xs: '16px', sm: '24px' }}
          bgcolor="#38251d"
          color="primary.contrastText"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="flex-end">
            <Typography variant="h4" color="primary">
              {item.formattedPrice}
            </Typography>
            &nbsp;
            <Typography variant="caption" color="inherit">
              {item.shippingFee}
            </Typography>
          </Box>

          <Button variant="contained" color="primary">
            Purchase
          </Button>
        </Box>
      </AppBar>
    </>
  );
}

export default ItemDetail;
