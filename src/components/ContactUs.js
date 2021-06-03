import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@material-ui/core';

import CustomInput from './shared/CustomInput';
import CustomButton from './shared/CustomButton';
import CustomSelect from './shared/CustomSelect';
import UserName from '../assets/icons/username.svg';
import Email from '../assets/icons/email.svg';
import Mobile from '../assets/icons/mobile.svg';
import Message from '../assets/icons/message.svg';

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(6)}px ${theme.spacing(4)}px`,
    textAlign: 'center',
    // height: '500px'
  },
  heading: {
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(5),
    fontWeight: 'bold'
  },
  formDiv: {
    // display: 'flex',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    width: '100%'
  },
  cardDiv: {
    width: '100%',
    border: '6px solid #E2E4E5',
    borderRadius: '8px',
    padding: theme.spacing(1),
  },
  cardContentDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  additionalDiv: {
    padding: `${theme.spacing(2)}px ${theme.spacing(0)}px`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  pDiv: {
    opacity: '0.8'
  },
  smDiv: {
    display: 'flex',
    flexDirection: 'row'
  },
  submitDiv: {
    paddingTop: theme.spacing(2)
  }
}));

const ContactUs = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.heading}>
        Let's Talk Something To Solve Something.
      </Typography>
      <Grid container>
        <Grid item md={3}></Grid>
        <Grid item md={6} xs={12}>
          <div className={classes.formDiv}>
            <Card className={classes.cardDiv}>
              <CardContent className={classes.cardContentDiv}>
                <Typography variant="h6">
                  Write to us
                </Typography>
                <form style={{ width: '100%' }}>
                  <CustomInput
                    id="1"
                    ia={<img src={UserName} alt="" />}
                    placeholder="Enter User Name"
                  />
                  <CustomInput
                    id="2"
                    ia={<img src={Email} alt="" />}
                    placeholder="Enter Email Id"
                  />
                  <CustomInput
                    id="3"
                    ia={<img src={Mobile} alt="" />}
                    placeholder="Enter Mobile Number"
                  />
                  <div className={classes.additionalDiv}>
                    <Typography variant="h6">
                      Additional Information
                    </Typography>
                    <Typography variant="p" className={classes.pDiv}>
                      Indicate the desired communication method
                    </Typography>
                  </div>
                  <div className={classes.smDiv}>
                    <Grid container>
                      <Grid item md={6}>
                        <CustomSelect
                          id="5"
                          options={options}
                        />
                      </Grid>
                      <Grid item md={6}>
                        <CustomInput
                          id="6"
                          placeholder="@profile"
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <CustomInput
                    id="4"
                    ia={<img src={Message} alt="" />}
                    placeholder="Message"
                  />
                </form>
              </CardContent>
            </Card>
            <div className={classes.submitDiv}>
              <CustomButton>SUBMIT NOW</CustomButton>
            </div>
          </div>
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>
    </div>
  );
}

const options = [
  { title: 'Telegram', id: 'telegram' },
  { title: 'Skype', id: 'skype' },
];

export default ContactUs;