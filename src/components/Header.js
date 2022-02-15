import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  MenuItem,
  Menu,
  IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import QuestLogo from '../assets/images/questLogo.png';
import CustomButton from './shared/CustomButton';

const menuItems = [
  { key: 'home', label: 'Home', id: '#home' },
  { key: 'features', label: 'Features', id: '#features' },
  { key: 'ico', label: 'IGO', id: '#ico' },
  { key: 'docs', label: 'Docs', id: '#docs' },
  // { key: 'about', label: 'About', id: '#about' },
  { key: 'faq', label: 'FAQ', id: '#faq' }
]

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    boxShadow: 'none',
    zIndex: '99'
  },
  logo: {},
  menuDiv: {
    color: '#000',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    '@media (max-width: 1050px)': {
      display: 'none'
    }
  },
  hamburgerDiv: {
    '@media (max-width: 1050px)': {
      // display: 'block',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    '@media (min-width: 1050px)': {
      display: 'none'
    }
  },
  link: {
    color: '#302E35',
    textDecoration: 'none'
  },
  menuItemLi: {
    marginLeft: '45px',
    '@media (max-width: 1050px)': {
      marginLeft: '0px'
    },
  },
  menuHamDiv: {
    '& .MuiMenu-paper': {
      // top: '35px !important',
      // left: '795px !important',
      position: 'absolute',
      top: '65px !important',
      '@media (min-width: 1050px)': {
        display: 'none'
      },
    },
    '& .MuiMenu-list': {
      padding: '12px 20px'
    }
  }
}))

const Header = () => {

  const classes = useStyles();
  // URLs
  const marketPlace = 'https://questcrypto.app';

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openUrl = (url) => {
    try {
      window.open(url);
    } catch (error) { console.log(error) }
  }

  return (
    <AppBar position="fixed" color="transparent" className={classes.header}>
      <Toolbar>
        <div>
          <img src={QuestLogo} alt="Logo" />
        </div>
        <div className={classes.menuDiv}>
          {menuItems.map((item, i) => {
            return (
              <a key={i} href={item.id} className={classes.link}>
                <MenuItem classes={{ root: classes.menuItemLi }}>
                  {item.label}
                </MenuItem>
              </a>
            );
          })}
          {/* <MenuItem classes={{root: classes.menuItemLi}}> */}
          <div className={classes.menuItemLi}>
            <CustomButton
              onClick={() => openUrl(marketPlace)}
            >
              MARKETPLACE
            </CustomButton>
          </div>
          {/* </MenuItem> */}
        </div>

        {/* <div className={classes.hamburgerDiv}>
          <MenuIcon fontSize="large" />
        </div> */}
        <div className={classes.hamburgerDiv}>
          <IconButton
            onClick={handleMenu}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Menu
            id="menu-appbar"
            placement="left"
            anchorEl={anchorEl}
            // anchorOrigin={{
            //   vertical: 'top',
            //   horizontal: 'right',
            // }}
            // keepMounted
            // transformOrigin={{
            //   vertical: 'top',
            //   horizontal: 'right',
            // }}
            className={classes.menuHamDiv}
            open={open}
            onClose={handleClose}
          >
            {menuItems.map((item, i) => {
              return (
                <a key={item.id} href={item.id} className={classes.link}>
                  <MenuItem onClick={handleClose} classes={{ root: classes.menuItemLi }} >
                    {item.label}
                  </MenuItem>
                </a>
              );
            })}
            {/* <MenuItem classes={{root: classes.menuItemLi}}> */}
            <div className={classes.menuItemLi} onClick={handleClose}>
              <CustomButton
                onClick={() => openUrl(marketPlace)}
              >
                MARKETPLACE
              </CustomButton>
            </div>
            {/* </MenuItem> */}
          </Menu>
        </div>
      </Toolbar>
    </AppBar >
  );
}

export default Header;
