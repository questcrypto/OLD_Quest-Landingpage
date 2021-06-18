import { makeStyles, Grid, Typography } from '@material-ui/core';

import CryptoImg from '../assets/images/crypto.png';
import RealEstateImg from '../assets/images/realEstate.png';
import IcoImg from '../assets/images/ico.png';
import CryptoCover from '../assets/images/cryptoCover.png';
import CustomButton from './shared/CustomButton';

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  subTitle: {
    textAlign: 'center',
    opacity: 0.8
  },
  subSubTitle: {
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  mainDiv: {
    padding: `${theme.spacing(6)}px 0px`,
    justifyContent: 'center'
  },
  cardDiv: {
    textAlign: 'center',
  },
  imgDiv: {
    // minHeight: '102px'
    '& img': {
      height: '102px',
      paddingBottom: theme.spacing(3)
    }
  },
  title: {
    fontWeight: 'bold',
    fontSize: '24px',
    paddingBottom: theme.spacing(3)
  },
  subTitle2: {
    padding: `0px ${theme.spacing(5)}px`,
    paddingBottom: theme.spacing(3)
  },
  btnDiv: {
    paddingBottom: theme.spacing(3)
  },
  coverDiv: {
    position: 'absolute',
  }
}));

const Features = () => {

  const classes = useStyles();

  // URLS
  const socialCommunity = 'https://questcryp.to/social';
  const learnMore1 = 'https://questcryp.to/crypto';
  const learnMore2 = 'https://questcryp.to/realestate';
  const learnMore3 = 'https://questcryp.to/ico';

  const openUrl = (url) => {
    try {
      window.open(url);
    } catch (error) { console.log(error) }
  }


  return (
    <>
      <div className={classes.coverDiv}>
        <img src={CryptoCover} alt="" />
      </div>
      <div id="features" className={classes.root}>

        <Typography variant="h4" gutterBottom className={classes.heading}>
          Real Property Investing and Cryptocurrency <br />
          Have Not United - Until Now
        </Typography>
        <Typography variant="subtitle1" gutterBottom className={classes.subTitle}>
          QUEST Crypto is proud to announce the launch of its ICO token, KNAB. The KNAB token will be<br />
          used to track company performance and will give governance to holder.<br />
          <span className={classes.subSubTitle} onClick={() => openUrl(socialCommunity)}>
            Join our social communities for real-time updates
          </span>
        </Typography>

        <Grid container className={classes.mainDiv}>

          <Grid item md={3}>
            <div className={classes.cardDiv}>
              <div className={classes.imgDiv}>
                <img src={CryptoImg} alt="crypto" />
              </div>
              <Typography variant="h4" className={classes.title}>CRYPTO</Typography>
              <Typography variant="subtitle1" className={classes.subTitle2}>
                QUEST Crypto operates in mature markets.
                Quest products are secured, involatile,
                and are not prone to social engineering
                and market manipulation
              </Typography>
              <div className={classes.btnDiv}>
                <CustomButton onClick={() => openUrl(learnMore1)}>LEARN MORE</CustomButton>
              </div>
            </div>
          </Grid>

          <Grid item md={3}>
            <div className={classes.cardDiv}>
              <div className={classes.imgDiv}>
                <img src={RealEstateImg} alt="Real Estate" />
              </div>
              <Typography variant="h4" className={classes.title}>REAL ESTATE</Typography>
              <Typography variant="subtitle1" className={classes.subTitle2}>
                Quest Crypto brings establised products, like real estate, into the
                DeFi world. Real Estate is the most reliable source of wealth in every country
                on the planet.
              </Typography>
              <div className={classes.btnDiv}>
                <CustomButton onClick={() => openUrl(learnMore2)}>LEARN MORE</CustomButton>
              </div>
            </div>
          </Grid>

          <Grid item md={3} >
            <div className={classes.cardDiv}>
              <div className={classes.imgDiv}>
                <img src={IcoImg} alt="ICO" />
              </div>
              <Typography variant="h4" className={classes.title}>ICO</Typography>
              <Typography variant="subtitle1" className={classes.subTitle2}>
                Participate in the KNAB ICO for governance, rewards, and access to the 
                QUEST Marketplace. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Typography>
              <div className={classes.btnDiv}>
                <CustomButton onClick={() => openUrl(learnMore3)}>LEARN MORE</CustomButton>
              </div>
            </div>
          </Grid>

        </Grid>


      </div>
    </>
  );
}

export default Features;