import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  dots: {
    height: 6,
    width: 6,
    borderRadius: '100%',
    background: theme.palette.divider,

    '&.active': {
      background: theme.palette.background.paper,
    },
  },

  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },

  dotsWrapper: {
    position: 'absolute',
    bottom: 0,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
}));

interface DotsProps {
  active: boolean;
  onClick: () => void;
}
const Dots = (props: DotsProps) => {
  const classes = useStyles();
  const { onClick, active } = props;

  return (
    <ButtonBase
      onClick={onClick}
      classes={{
        root: `${classes.dots} ${active ? 'active' : ''}`,
      }}
    />
  );
};

interface CarouselElement {
  image: string;
}
interface CarouselProps {
  data: CarouselElement[];
  height?: string;
}

function Carousel(props: CarouselProps) {
  const classes = useStyles();
  const { data, height = 320 } = props;
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Box position="relative" height={height}>
      <img
        src={data[activeIndex].image}
        alt="no-resource"
        className={classes.image}
      />

      <Box className={classes.dotsWrapper}>
        {data.map((_item, index) => (
          <Dots
            key={`card-item-${index}`}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Carousel;
