import { useState, useEffect } from 'react';
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';

import { apiBaseUrl } from '../constants/globalConstants';
import CustomInput from './shared/CustomInput';
import CustomButton from './shared/CustomButton';
import CustomSelect from './shared/CustomSelect';
import UserName from '../assets/icons/username.svg';
import Email from '../assets/icons/email.svg';
import Mobile from '../assets/icons/mobile.svg';
// import Skype from '../assets/icons/skype.svg';
// import Whatsapp from '../assets/icons/whatsapp.svg';
import Whatsapp from '../assets/images/whatsapp.png';
import Telegram from '../assets/icons/telegram.svg';
import Message from '../assets/icons/message.svg';
import Spinner from './shared/spinner';

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
    // display: 'flex',
    // flexDirection: 'row'
  },
  submitDiv: {
    paddingTop: theme.spacing(2)
  },
  errorText: {
    color: 'red',
    display: 'flex'
  },
  endAdor: {
    display: 'none'
  }
}));


const ContactUs = () => {

  const classes = useStyles();
  const [initialRender, setInitialRender] = useState(false);
  const [form, setForm] = useState({
    userName: '',
    email: '',
    mobile: '',
    skypeId: '',
    telegramId: '',
    message: ''
  });
  const [isSubmit, setIsSubmit] = useState(false);

  // Snackbar
  const [snack, setSnack] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal, open } = snack;
  const snackOpen = () => {
    setSnack({ open: true, vertical: 'top', horizontal: 'right' });
  };
  const snackClose = () => {
    setSnack({ ...snack, open: false });
  };
  const [success, setSuccess] = useState(false);
  const [snackMsg, setSnackMsg] = useState('');

  useEffect(() => {
    if (initialRender) {
      validate();
      submitFnBtn();
    }
    setInitialRender(true);
  }, [form]);

  const validate = (id) => {
    try {
      switch (id) {
        case 'userName':
          if (form.userName.length >= 4) {
            return false;
          } else { return true; }
        case 'email':
          let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          if (form.email.match(reg)) {
            return false;
          } else {
            return true;
          }
        case 'mobile':
          if (form.mobile.length === 10) {
            return false;
          } else { return true; }
      }
    } catch (error) { console.log(error) }
  }

  const validateText = (id) => {
    try {
      switch (id) {
        case 'userName':
          if (form.userName.length >= 4) {
            return '';
          } else { return 'Username should be of atleast four characters'; }
        case 'email':
          let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          if (form.email.match(reg)) {
            return '';
          } else {
            return 'Email is invalid';
          }
        case 'mobile':
          if (form.mobile.length === 10) {
            return '';
          } else { return 'Mobile number is of 10 digits'; }
      }
    } catch (error) { console.log(error); }
  }

  const handleSubmit = async () => {
    try {
      setIsSubmit(true);
      const res = await axios.post(`${apiBaseUrl}/user/randomUser`, { ...form });
      setSuccess(true);
      setSnackMsg(res.data.message);
      snackOpen();
    } catch (error) {
      if (!!error && error.response && error.response.data.message) {
        setSnackMsg(error.response.data.message)
        snackOpen();
      } else if (!!error.message) {
        setSnackMsg(error.message)
        snackOpen();
      } else {
        setSnackMsg('Something went wrong , please try again')
        snackOpen();
      }
    } finally {
      setIsSubmit(false);
      setForm({
        userName: '',
        email: '',
        mobile: '',
        skypeId: '',
        telegramId: '',
        message: ''
      });
    }
  }

  const submitFnBtn = () => {
    try {
      if ((!validate('userName') && !validate('email') && !validate('mobile')) &&
        (form.userName !== '' && form.email !== '' && form.mobile !== '')) {
        return false;
      }
      return true;
    } catch (error) { console.log(error) }
  }

  return (
    <div className={classes.root}>

      <Snackbar
        key={vertical + horizontal}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={5000}
        onClose={snackClose}
      >
        {
          <Alert onClose={snackClose} severity={success ? 'success' : 'error'} style={{ zIndex: '999999' }}>
            {snackMsg}
          </Alert>
        }
      </Snackbar>

      <Typography variant="h4" className={classes.heading}>
        Contact Us
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
                <form style={{ width: '100%' }} noValidate autoComplete="off">
                  <CustomInput
                    id="userName"
                    ia={<img src={UserName} alt="" />}
                    placeholder="Enter User Name"
                    value={form.userName}
                    onChange={e => setForm({ ...form, [e.target.id]: e.target.value })}
                    error={form.userName !== '' && validate('userName')}
                  // helperText={form.userName !== '' && validateText('userName')}
                  />
                  {(form.userName !== '' && validateText('userName')) ?
                    <span className={classes.errorText}>{validateText('userName')}</span> : ''}
                  <CustomInput
                    id="email"
                    ia={<img src={Email} alt="" />}
                    placeholder="Enter Email Id"
                    value={form.email}
                    onChange={e => setForm({ ...form, [e.target.id]: e.target.value })}
                    error={form.email !== '' && validate('email')}
                  // helperText={form.email !== '' && validateText('email')}
                  />
                  {(form.email !== '' && validateText('email')) ?
                    <span className={classes.errorText}>{validateText('email')}</span> : ''}
                  <CustomInput
                    id="mobile"
                    type="number"
                    ia={<img src={Mobile} alt="" />}
                    placeholder="Enter Mobile Number"
                    value={form.mobile}
                    onChange={e => setForm({ ...form, [e.target.id]: e.target.value })}
                    error={form.mobile !== '' && validate('mobile')}
                  // helperText={form.mobile !== '' && validateText('mobile')}
                  />
                  {(form.mobile !== '' && validateText('mobile')) ?
                    <span className={classes.errorText}>{validateText('mobile')}</span> : ''}
                  <div className={classes.additionalDiv}>
                    <Typography variant="h6">
                      Additional Information
                    </Typography>
                    <Typography variant="subtitle2" className={classes.pDiv}>
                      Indicate your desired communication method
                    </Typography>
                  </div>
                  <div className={classes.smDiv}>
                    <Grid container>
                      <Grid item md={6} xs={12}>
                        <CustomSelect
                          id="5"
                          name="Whatsapp"
                          icon={Whatsapp}
                          classes={{ endAdornment: classes.endAdor}}
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <CustomInput
                          id="skypeId"
                          placeholder="@profile"
                          value={form.skypeId}
                          onChange={e => setForm({ ...form, [e.target.id]: e.target.value })}
                        />
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item md={6} xs={12}>
                        <CustomSelect
                          id="7"
                          name="Telegram"
                          icon={Telegram}
                          classes={{ endAdornment: classes.endAdor}}
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <CustomInput
                          id="telegramId"
                          placeholder="@profile"
                          value={form.telegramId}
                          onChange={e => setForm({ ...form, [e.target.id]: e.target.value })}
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <CustomInput
                    id="message"
                    ia={<img src={Message} alt="" />}
                    placeholder="Message"
                    value={form.message}
                    onChange={e => setForm({ ...form, [e.target.id]: e.target.value })}
                  />
                </form>
              </CardContent>
            </Card>
            <div className={classes.submitDiv}>
              <CustomButton disabled={submitFnBtn()} onClick={handleSubmit}>
                {isSubmit ? <Spinner /> : 'SUBMIT NOW'}
              </CustomButton>
            </div>
          </div>
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>




    </div>
  );
}

// const options = [
//   { title: 'Telegram', id: 'telegram' },
//   { title: 'Skype', id: 'skype' },
// ];

export default ContactUs;
