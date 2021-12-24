import React, { useState, useCallback } from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { InterfaceItemEntity } from 'src/entities/items/items';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      cursor: 'pointer',
    },

    cardMedia: {
      objectFit: 'cover',
      height: theme.typography.pxToRem(200),
    },

    cardContent: {
      paddingBottom: `${theme.typography.pxToRem(8)} !important`,
      padding: theme.typography.pxToRem(8),
    },

    soldTag: {
      position: 'absolute',
      height: 75,
      width: 75,
      clipPath: `polygon(0 0, 0% 100%, 100% 0)`,
    },

    soldTagText: {
      display: 'flex',
      justifyContent: 'center',
      transform: `rotate(-45deg)`,
      paddingTop: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      width: '100%',
      height: '100%',
      letterSpacing: 1,
    },
  })
);

export interface ItemCardProps {
  item: InterfaceItemEntity;
  handleCardClick: () => void;
}

const ItemCard = React.memo(function ItemCard(props: ItemCardProps) {
  const [isFavActive, setIsFavActive] = useState(false);
  const classes = useStyles();

  const { item, handleCardClick } = props;
  const handleFavIconClick = useCallback(
    (event) => {
      event.stopPropagation();
      if (isFavActive) {
        item.decreaseFav();
        return setIsFavActive(false);
      }

      item.increaseFav();
      return setIsFavActive(true);
    },
    [isFavActive, item]
  );

  return (
    <Card onClick={handleCardClick} classes={{ root: classes.card }}>
      {item.isSoldOut && (
        <Box
          component="span"
          bgcolor="primary.main"
          color="secondary.contrastText"
          className={classes.soldTag}
        >
          <Box className={classes.soldTagText}>sold</Box>
        </Box>
      )}
      <CardMedia classes={{ root: classes.cardMedia }} image={item.image} />
      <CardContent classes={{ root: classes.cardContent }}>
        <Typography variant="subtitle1">{item.name}</Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box flex="1 auto">
            <Typography variant="h6">
              <Box fontWeight="fontWeightBold">{item.formattedPrice}</Box>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton
              aria-label="like_count"
              color={isFavActive ? 'primary' : 'default'}
              onClick={handleFavIconClick}
            >
              {isFavActive ? (
                <FavoriteIcon fontSize="inherit" />
              ) : (
                <FavoriteBorderIcon fontSize="inherit" />
              )}
            </IconButton>

            <>{item.likeCount} </>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
});

export default ItemCard;
