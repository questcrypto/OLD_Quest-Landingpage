import { makeStyles, Grid, Typography } from '@material-ui/core';

import CustomButton from './shared/CustomButton';
import AboutDoc from '../assets/images/aboutDoc.png';
import AboutWebApp from '../assets/images/aboutWebApp.png';

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
  },
  leftContent: {
    padding: `${theme.spacing(4)}px ${theme.spacing(10)}px`,
    paddingRight: 0
  },
  rightContentDiv: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    paddingBottom: theme.spacing(3),
    fontSize: '36px',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: '18px',
    opacity: '0.8',
    paddingBottom: theme.spacing(3),
    paddingRight: theme.spacing(7)
  },
  textRightDiv: {
    paddingLeft: theme.spacing(8)
  }
}));

const About = () => {

  const classes = useStyles();

  const learnMoreFn = () => {
    try {
      window.open('https://questcrypto.app/');
    } catch(error) { console.log(error) }
  }

  const learnAboutFn = () => {
    try {
      window.open('https://questcrypto.app/');
    } catch(error) { console.log(error) }
  }

  return (
    <div className={classes.root}>
      <Grid container id="docs">

        <Grid item md={7} xs={12} sm={12}>
          <div className={classes.leftContent}>
            <Typography variant="h4" className={classes.title}>
              About Docs
            </Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              A document released by a crypto project that gives investors technical information about
              its concept, and a roadmap for how it plans to grow and succeed. <br />
              Do you want to know all the nitty gritty details ? Click below mentioned button and receive a copy of
              our whitepaper now.
            </Typography>
            <CustomButton onClick={learnMoreFn}>
              LEARN MORE
            </CustomButton>
          </div>
        </Grid>

        <Grid item md={5} xs={12} sm={12}>
          <div className={classes.rightContentDiv}>
            <img src={AboutDoc} alt="About" />
          </div>
        </Grid>

      </Grid>

      <Grid container id="about">
        <Grid item md={6} xs={12} sm={12} >
          <div>
            <img src={AboutWebApp} alt="About" style={{ width: '100%', maxWidth: '100%' }} />
          </div>
        </Grid>
        <Grid item md={6} xs={12} sm={12}>
          <div className={classes.textRightDiv}>
            <Typography variant="h4" className={classes.title}>
              About Company
            </Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              A document released by a crypto project that gives investors technical information about
              its concept, and a roadmap for how it plans to grow and succeed. <br />
              Do you want to know all the nitty gritty details ? Click below mentioned button and receive a copy of
              our whitepaper now.
            </Typography>
            <CustomButton onClick={learnAboutFn}>
              ABOUT US
            </CustomButton>
          </div>
        </Grid>
      </Grid>

    </div>
  );
}

export default About;