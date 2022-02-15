import { makeStyles, Grid, Typography } from '@material-ui/core';

import CustomButton from './shared/CustomButton';
import AboutDoc from '../assets/images/aboutDoc.png';
import AboutWebApp from '../assets/images/aboutWebApp.png';
// import DigitalWarFare from '../assets/images/digitalWarFare.png';
import DigitalWarFare from '../assets/icons/digitalWarFare.svg';


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
  },
  textUnderline: {
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  warfareImg: {
    position: 'relative',
    top: '24px',
    paddingLeft: theme.spacing(1) 
  }
}));

const About = () => {

  const classes = useStyles();

  // URLs 
  const digitalAuditUrl = 'https://questcryp.to/digitalwarfare';
  const knabLearnMore = 'https://questcryp.to/learnknab';
  const marketPlaceLearnMore = 'https://questcryp.to/learnquest';
  const openUrl = (url) => {
    try {
      window.open(url);
    } catch (error) { console.log(error) }
  }

  return (
    <div className={classes.root}>
      <Grid container id="docs">

        <Grid item md={7} xs={12} sm={12}>
          <div className={classes.leftContent}>
            <Typography variant="h4" className={classes.title}>
              KNAB ICO
            </Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              The QUEST Crypto governance token is KNAB, or "Bank" backwards as a nod to flipping
              current financial institutions on their heads. The token tracks company performance and
              provides the token holder governance and participation in reward pools.
              <div>
                <br />
                Code audit performed by &nbsp;
                <span 
                  className={classes.textUnderline}
                  onClick={() => openUrl(digitalAuditUrl)}
                >Digital Warfare.
                <img src={DigitalWarFare} alt='' className={classes.warfareImg} />
                </span>
              </div>
            </Typography>
            <CustomButton onClick={() => openUrl(knabLearnMore)}>
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
              QUEST Marketplace
            </Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              A decentralized marketplace where property owners can tokenize and sell components of their
              property rights to token buyers. Cryptocurrency enthusiasts now gain access to realestate markets,
              an area previously unavailable to them. 
            </Typography>
            <CustomButton onClick={() => openUrl(marketPlaceLearnMore)}>
              LEARN MORE
            </CustomButton>
          </div>
        </Grid>
      </Grid>

    </div>
  );
}

export default About;
