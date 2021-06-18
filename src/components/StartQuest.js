import { makeStyles } from '@material-ui/core';
import StartYourQuest1 from '../assets/images/startYourQuest1.png';
import StartYourQuest2 from '../assets/images/startYourQuest2.png';
import CustomButton from './shared/CustomButton';

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(2)}px 0px`,
    position: 'relative',
  },
  backImage: {
    width: '100%',
    height: '100%',
  },
  backImage2: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    left: 0,
    opacity: 0.2
  },
  btnDiv: {
    position: 'absolute',
    left: 0,
    top: 0,
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    background: '#EFA937',
    '&:hover': {
      background: '#EFA937',
    }
  },
}));

const StartQuest = () => {

  // URLs 
  const startQuest = 'https://questcrypto.app';
  const openUrl = (url) => {
    try {
      window.open(url);
    } catch (error) { console.log(error) }
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={StartYourQuest1} alt='' className={classes.backImage} />
      <img src={StartYourQuest2} alt='' className={classes.backImage2} />
      <div className={classes.btnDiv}>
        <CustomButton 
          size="large" 
          classes={{ root: classes.btn }}
          onClick={() => openUrl(startQuest)}
          >START YOUR QUEST</CustomButton>
      </div>
    </div>
  );

}

export default StartQuest;