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

  // URLs 
  const questMarketPlace = 'https://questcrypto.app';
  const knabGrab = 'https://questcrypto.app';
  const faq = 'https://questcryp.to/faq';
  const whitepaper = 'https://questcryp.to/whitepaper';
  const codeAudit = 'https://questcryp.to/audit';
  const medium = 'https://questcryp.to/medium';
  const telegram = 'https://questcryp.to/telegram';
  const reddit = 'https://questcryp.to/reddit';
  const twitter = 'https://questcryp.to/twittershare';
  const instagram = 'https://questcryp.to/instagram'
  const openUrl = (url) => {
    try {
      window.open(url);
    } catch (error) { console.log(error) }
  }

  return (
    <div className={classes.root}>
      <Grid container>

        <Grid item sm={5} xs={12}>
          <div className={classes.firstDiv}>
            <img src={FooterLogo} alt="Logo" />
            <Typography variant="h6" className={classes.logoText}>
              Cryptocurrency Irrevocably Secured to Real Estate
            </Typography>
          </div>
        </Grid>

        <Grid item sm={2} xs={12}>
          <div className={classes.centerDiv}>
            <div className={classes.centerItems} onClick={() => openUrl(questMarketPlace)}>
              QUEST Marketplace
            </div>
            <div className={classes.centerItems} onClick={() => openUrl(knabGrab)}>
              KNAB GRAB
            </div>
            <div className={classes.centerItems} onClick={() => openUrl(faq)}>
              FAQ
            </div>
          </div>
        </Grid>

        <Grid item sm={2} xs={12}>
          <div className={classes.centerDiv}>
            <div className={classes.centerItems} onClick={() => openUrl(whitepaper)}>
              Whitepaper
            </div>
            <div className={classes.centerItems} onClick={() => openUrl(codeAudit)}>
              Code Audit
            </div>
            <div className={classes.centerItems} onClick={() => openUrl(medium)}>
              Medium
            </div>
          </div>
        </Grid>

        <Grid item sm={3} xs={12}>
          <div className={classes.rightDiv}>
            <Typography variant="h6">
              Follow Us on Social Media
            </Typography>
            <div className={classes.socialMediaDiv}>
              <img src={Telegram} alt="Telegram" className={classes.smIcon} onClick={() => openUrl(telegram)} />
              <img src={Reddit} alt="Reddit" className={classes.smIcon} onClick={() => openUrl(reddit)} />
              <img src={Twitter} alt="Twitter" className={classes.smIcon} onClick={() => openUrl(twitter)} />
              <img src={Instagram} alt="Instagram" className={classes.smIcon} onClick={() => openUrl(instagram)} />
            </div>
          </div>
        </Grid>

      </Grid>
    </div>
  );
}

export default Footer;