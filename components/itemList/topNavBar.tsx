import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import CheckIcon from '@material-ui/icons/Check';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  search: {
    flex: '1 auto',

    [theme.breakpoints.up('sm')]: {
      maxWidth: theme.typography.pxToRem(300),
    },
  },

  searchInputWrapper: {
    borderRadius: 4,
  },

  searchInput: {
    padding: `${theme.typography.pxToRem(6)} 0 ${theme.typography.pxToRem(
      6
    )} ${theme.typography.pxToRem(6)}`,
    minHeight: theme.typography.pxToRem(30),
  },
}));

function TopNavBar() {
  const classes = useStyles();

  const menuId = 'top-nav-bar';
  return (
    <Toolbar>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flex="1 auto"
      >
        <Box
          display="flex"
          alignItems="center"
          flex={{ xs: '1 auto', md: 'unset' }}
          mr={2}
        >
          <Box mr={2}>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
          </Box>

          <TextField
            placeholder="Search…"
            variant="filled"
            classes={{
              root: classes.search,
            }}
            InputProps={{
              disableUnderline: true,
              endAdornment: <SearchIcon color="disabled" />,
              classes: {
                root: classes.searchInputWrapper,
                input: classes.searchInput,
              },
            }}
          />
        </Box>

        <Box alignItems="center" display="flex">
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <NotificationsNoneIcon />
          </IconButton>

          <IconButton
            edge="end"
            aria-label="check icon"
            aria-controls={menuId}
            aria-haspopup="true"
            color="inherit"
          >
            <CheckIcon />
          </IconButton>
        </Box>
      </Box>
    </Toolbar>
  );
}

export default TopNavBar;
