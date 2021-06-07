import { makeStyles, Grid, Typography } from '@material-ui/core';

import CryptoImg from '../assets/images/crypto.png';
import RealEstateImg from '../assets/images/realEstate.png';
import IcoImg from '../assets/images/ico.png';
import CustomButton from './shared/CustomButton';
import FeatureMetaMask from '../assets/images/featureMetaMask.png';
import CryptoCover from '../assets/images/cryptoCover.png';

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
  metaMaskOuter: {
    display: 'flex',
    justifyContent: 'center'
  },
  metaMaskContainer: {
    width: '90%',
    height: 'auto',
    background: 'linear-gradient(183.26deg, #E6BA73 4.33%, #BA8E4D 95.54%)',
    borderRadius: '12px'
  },
  walletTextDiv: {
    padding: `${theme.spacing(8)}px ${theme.spacing(12)}px`,
    paddingRight: 0,
    '@media (max-width: 900px)': {
      paddingLeft: '24px'
    },
  },
  walletDiv: {
    display: 'flex',
    justifyContent: 'center'
  },
  title3: {
    paddingBottom: theme.spacing(3),
    fontSize: '36px',
    fontWeight: 'bold'
  },
  subTitle3: {
    fontSize: '21px',
    opacity: '0.8',
    paddingBottom: theme.spacing(3)
  },
  connectBtnLabel: {
    color: '#2B2D31'
  },
  btn: {
    background: '#FFF',
    '&:hover': {
      background: '#FFF',
    }
  },
  coverDiv: {
    position: 'absolute',
  }
}));

const Features = () => {

  const classes = useStyles();

  const learnMoreFn = () => {
    try {
      window.open('https://questcrypto.app/');
    } catch(error) { console.log(error) }
  }

  const connectFn = () => {
    try {
      window.open('https://questcrypto.app/');
    } catch(error) { console.log(error) }
  }

  return (
    <>
      <div className={classes.coverDiv}>
        <img src={CryptoCover} alt="" />
      </div>
      <div id="features" className={classes.root}>

        <Typography variant="h4" gutterBottom className={classes.heading}>
          Finally focus on my marketing <br />
        strategy and delegate
      </Typography>
        <Typography variant="subtitle1" gutterBottom className={classes.subTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </Typography>

        <Grid container className={classes.mainDiv}>

          <Grid item md={3}>
            <div className={classes.cardDiv}>
              <div className={classes.imgDiv}>
                <img src={CryptoImg} alt="crypto" />
              </div>
              <Typography variant="h4" className={classes.title}>CRYPTO</Typography>
              <Typography variant="subtitle1" className={classes.subTitle2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </Typography>
              <div className={classes.btnDiv}>
                <CustomButton onClick={learnMoreFn}>LEARN MORE</CustomButton>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Typography>
              <div className={classes.btnDiv}>
                <CustomButton onClick={learnMoreFn}>LEARN MORE</CustomButton>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Typography>
              <div className={classes.btnDiv}>
                <CustomButton onClick={learnMoreFn}>LEARN MORE</CustomButton>
              </div>
            </div>
          </Grid>

        </Grid>

        <div className={classes.metaMaskOuter}>
          <div className={classes.metaMaskContainer}>
            <Grid container>

              <Grid item md={7} xs={12}>
                <div className={classes.walletTextDiv}>
                  <Typography variant="h4" gutterBottom className={classes.title3}>
                    A crypto wallet & gateway to block chain apps
                </Typography>
                  <Typography variant="subtitle1" gutterBottom className={classes.subTitle3}>
                    Start exploring Strategic Land applications in seconds by connecting with MetaMask
                 </Typography>
                  <CustomButton classes={{ root: classes.btn }}>
                    <span className={classes.connectBtnLabel} onClick={connectFn}>CONNECT NOW</span>
                  </CustomButton>
                </div>
              </Grid>

              <Grid item md={5} xs={12}>
                <div className={classes.walletDiv}>
                  <img src={FeatureMetaMask} alt='Meta Mask Wallet' />
                </div>
              </Grid>

            </Grid>
          </div>
        </div>

      </div>
    </>
  );
}

export default Features;