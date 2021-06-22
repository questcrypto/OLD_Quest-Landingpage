import { makeStyles, Typography, Grid } from '@material-ui/core';

// import step1Image from '../assets/images/step1Image.png';
// import step1 from '../assets/images/step1.png';
// import step2Image from '../assets/images/step2Image.png';
// import step2 from '../assets/images/step2.png';
// import step3Image from '../assets/images/step3Image.png';
// import step3 from '../assets/images/step3.png';
// import step4Image from '../assets/images/step4Image.png';
// import step4 from '../assets/images/step4.png';
// import step5Image from '../assets/images/step5Image.png';
// import step5 from '../assets/images/step5.png';

import step1Image from '../assets/icons/step1Image.svg';
import step1 from '../assets/icons/step1.svg';
import step2Image from '../assets/icons/step2Image.svg';
import step2 from '../assets/icons/step2.svg';
import step3Image from '../assets/icons/step3Image.svg';
import step3 from '../assets/icons/step3.svg';
import step4Image from '../assets/icons/step4Image.svg';
import step4 from '../assets/icons/step4.svg';
import step5Image from '../assets/icons/step5Image.svg';
import step5 from '../assets/icons/step5.svg';

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(6)}px ${theme.spacing(14)}px`,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    display: 'flex',
    flexDirection: 'row'
  },
  mainDiv: {
    // width: '20%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
    // padding: `0px ${theme.spacing(6)}px`
  },
  subDiv: {
    display: 'flex',
    flexDirection: 'row',
    padding: '16px 0px',
  },
  textDiv: {
    paddingLeft: theme.spacing(1.5),
    color: '#302E35',
    fontSize: '14px'
  },
  mainImgDiv: {
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainImg: {
    // width: '100%',
    // height: 'auto',
    // maxHeight: '150px',
    padding: `0px ${theme.spacing(6)}px`
  },
  subImg: {
    // height: '35px'
  },
  linkText: {
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  line: {
    height: '1px',
    width: '100%',
    backgroundColor: '#DEDEDE',

    position: 'absolute',
    width: '25%',
    top: '30%',
    left: '85%'
  }
}))

const KnabGrab = () => {

  // URLs
  const step2Url = 'https://questcryp.to/metamask';
  const step3Url = 'https://questcryp.to/matic';
  const step4Url = 'https://https://questcryp.to/app';
  const step5Url = 'https://questcryp.to/social';

  const openUrl = (url) => {
    try {
      window.open(url);
    } catch (error) { console.log(error) }
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Get Ready for the KNAB GRAB
      </Typography>
      <div className={classes.container}>

        <Grid container spacing={1}>

          <Grid item xs={12} md>
            <div className={classes.mainDiv}>
              <div className={classes.mainImgDiv}>
                <img src={step1Image} alt='' className={classes.mainImg} />
              </div>
              <div className={classes.subDiv}>
                <img src={step1} alt='' className={classes.subImg} />
                <Typography variant="subtitle2" className={classes.textDiv}>
                  Purchase USDC tokens from your favorite exchange and 
                  <span className={classes.linkText} onClick={() => openUrl(step2Url)}> transfer them to Polygon Network </span>
                  (Layer 2)
                </Typography>
              </div>
              <div className={classes.line}></div>
            </div>
          </Grid>

          <Grid item xs={12} md>
            <div className={classes.mainDiv}>
              <div className={classes.mainImgDiv}>
                <img src={step2Image} alt='' className={classes.mainImg} />
              </div>
              <div className={classes.subDiv}>
                <img src={step2} alt='' className={classes.subImg} />
                <Typography variant="subtitle2" className={classes.textDiv}>
                  Install
                  <span className={classes.linkText} onClick={() => openUrl(step2Url)}> MetaMask </span>
                  and create or import a wallet
                </Typography>
              </div>
              <div className={classes.line}></div>
            </div>
          </Grid>

          <Grid item xs={12} md>
            <div className={classes.mainDiv}>
              <div className={classes.mainImgDiv}>
                <img src={step3Image} alt='' className={classes.mainImg} />
              </div>
              <div className={classes.subDiv}>
                <img src={step3} alt='' className={classes.subImg} />
                <Typography variant="subtitle2" className={classes.textDiv}>
                  Configure MetaMask to use the
                  <span className={classes.linkText} onClick={() => openUrl(step3Url)}> Polygon/Matic </span>
                  network.
                </Typography>
              </div>
              <div className={classes.line}></div>
            </div>
          </Grid>

          <Grid item xs={12} md>
            <div className={classes.mainDiv}>
              <div className={classes.mainImgDiv}>
                <img src={step4Image} alt='' className={classes.mainImg} />
              </div>
              <div className={classes.subDiv}>
                <img src={step4} alt='' className={classes.subImg} />
                <Typography variant="subtitle2" className={classes.textDiv}>
                  Connect your MetaMask wallet to the
                  <span className={classes.linkText} onClick={() => openUrl(step4Url)}> QUEST Marketplace </span>
                  web app.
                </Typography>
              </div>
              <div className={classes.line}></div>
            </div>
          </Grid>

          <Grid item xs={12} md>
            <div className={classes.mainDiv}>
              <div className={classes.mainImgDiv}>
                <img src={step5Image} alt='' className={classes.mainImg} />
              </div>
              <div className={classes.subDiv}>
                <img src={step5} alt='' className={classes.subImg} />
                <Typography variant="subtitle2" className={classes.textDiv}>
                  Join our
                  <span className={classes.linkText} onClick={() => openUrl(step5Url)}> social media </span>
                  channels to receive the latest launch updates.
                </Typography>
              </div>
            </div>
          </Grid>

        </Grid>
      </div>
    </div>
  );
}

export default KnabGrab;
