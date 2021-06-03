import { makeStyles, Grid, Typography } from '@material-ui/core';

import HomeImg from '../assets/images/home.png';
import CustomButton from './shared/CustomButton';

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
  },
  leftContent: {
    padding: `${theme.spacing(4)}px ${theme.spacing(10)}px`,
    '@media (max-width: 1024px)': {
      padding: `${theme.spacing(4)}px ${theme.spacing(1)}px`,
    },
  },
  rightContent: {
    '& img': {
      width: '100%'
    }
  },
  title: {
    padding: '16px 0px'
  },
  subTitle: {
    padding: '16px 0px'
  },
  btnDiv: {
    padding: '16px 0px'
  }
}));

const Home = () => {

  const classes = useStyles();

  return (
    <>
      <Grid id="home" container className={classes.root}>

        <Grid item md={6} xs={12} className={classes.leftContent}>
          <div>
            <Typography variant="h3" className={classes.title}>
              Buy/Sell your NFT's On Stragetic Land
            </Typography>
          </div>
          <div>
            <Typography variant="h6" className={classes.subTitle}>
              Trusted by million users, with Lightning-Fast crypto Trading Buy and Sell in Minutes.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </Typography>
          </div>
          <div className={classes.btnDiv}>
            <CustomButton>GET STARTED</CustomButton>
          </div>
        </Grid>

        <Grid item md={6} xs={12} className={classes.rightContent}>
          <img src={HomeImg} alt="Home" />
        </Grid>

      </Grid>
    </>
  );
}

export default Home;