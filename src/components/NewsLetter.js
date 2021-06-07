import { makeStyles, Typography } from '@material-ui/core';

import CustomButton from './shared/CustomButton';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '265px',
    background: 'linear-gradient(183.26deg, #2B2D31 4.33%, #2B2D31 95.54%)',
    marginTop: theme.spacing(5),
    color: '#FFF',
    padding: `${theme.spacing(2)}px`,
    textAlign: 'center'
  },
  title: {
    padding: theme.spacing(3)
  },
  subTitle: {
    // padding: theme.spacing(3),
    fontSize: '18px',
    opacity: '0.8'
  },
  btnDiv: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(5)
  },
  btn: {
    background: '#EFA937',
    '&:hover': {
      background: '#EFA937',
    }
  },
  getStartedBtn: {
    border: '1px solid #FFFFFF',
    boxShadow: '0px 3px 1px - 2px rgba(30, 52, 68, 0.2)',
    borderRadius: '2px',
    color: '#FFFFFF',
    '&:hover': {
      border: '1px solid #FFFFFF'
    }
  }
}));

const NewsLetter = () => {

  const classes = useStyles();

  const getStartedFn = () => {
    try {
      window.open('https://questcrypto.app/');
    } catch(error) { console.log(error) }
  }

  const signUpFn = () => {
    try {
      window.open('https://questcrypto.app/');
    } catch(error) { console.log(error) }
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Receive our NewsLetter
      </Typography>
      <Typography variant="subtitle1" className={classes.subTitle}>
        The Time is now! Sign up to receive updates and announcements
      </Typography>
      <div className={classes.btnDiv}>
        <CustomButton
          variant="outlined"
          classes={{ root: classes.getStartedBtn }}
          onClick={getStartedFn}
        >GET STARTED</CustomButton>
        <CustomButton
          style={{ marginLeft: '16px' }}
          classes={{ root: classes.btn }}
          onClick={signUpFn}
        >SIGN UP</CustomButton>
      </div>
    </div>
  );
}

export default NewsLetter;