import { makeStyles, Grid, Typography } from '@material-ui/core';

import FooterLogo from '../assets/images/footerLogo.png';
import Telegram from '../assets/images/telegram.png';
import Twitter from '../assets/images/twitter.png';
import Instagram from '../assets/images/instagram.png';
import Reddit from '../assets/images/reddit.png';

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(4)}px ${theme.spacing(8)}px`,
    background: '#1E3444',
    color: '#FFFFFF'
  },
  firstDiv: {
    // padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`
  },
  logoText: {
    padding: `${theme.spacing(2)}px 0px`,
    paddingRight: theme.spacing(10),
    opacity: 0.8,
    fontSize:'16px'
  },
  centerDiv: {},
  centerItems: {
    paddingBottom: theme.spacing(4),
    cursor: 'pointer'
  },
  rightDiv: {},
  socialMediaDiv: {
    padding: `${theme.spacing(2)}px ${theme.spacing(0)}px`
  },
  smIcon: {
    paddingRight: theme.spacing(1.5),
    cursor: 'pointer'
  }
}));

const Footer = () => {

  const classes = useStyles();

  const marketPlaceFn = () => {
    try {
      window.open('https://questcrypto.app/');
    } catch(error) { console.log(error) }
  }

  const telegramFn = () => {
    try {
      window.open('https://questcrypto.app/');
    } catch(error) { console.log(error) }
  }

  return (
    <div className={classes.root}>
      <Grid container>

        <Grid item sm={5} xs={12}>
          <div className={classes.firstDiv}>
            <img src={FooterLogo} alt="Logo" />
            <Typography variant="h6" className={classes.logoText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
          </div>
        </Grid>

        <Grid item sm={2} xs={12}>
          <div className={classes.centerDiv}>
            <div className={classes.centerItems} onClick={marketPlaceFn}>
              Market Place
            </div>
            <div className={classes.centerItems}>
              Get Started
            </div>
            <div className={classes.centerItems}>
              FAQ
            </div>
          </div>
        </Grid>

        <Grid item sm={2} xs={12}>
          <div className={classes.centerDiv}>
            <div className={classes.centerItems}>
              Whitepaper
            </div>
            <div className={classes.centerItems}>
              About Us
            </div>
            <div className={classes.centerItems}>
              Medium
            </div>
          </div>
        </Grid>

        <Grid item sm={3} xs={12}>
          <div className={classes.rightDiv}>
            <Typography variant="h6">
              Follow us on social media
            </Typography>
            <div className={classes.socialMediaDiv}>
              <img src={Telegram} alt="Telegram" className={classes.smIcon} onClick={telegramFn}/>
              <img src={Reddit} alt="Reddit" className={classes.smIcon} />
              <img src={Twitter} alt="Twitter" className={classes.smIcon} />
              <img src={Instagram} alt="Instagram" className={classes.smIcon} />
            </div>
          </div>
        </Grid>

      </Grid>
    </div>
  );
}

export default Footer;