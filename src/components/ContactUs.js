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

import { createWidget } from '@typeform/embed'
import '@typeform/embed/build/css/widget.css'

createWidget('pOSU2JXZ', {
  container: document.querySelector('#form'), // you need an element with 'form' id
  hideHeaders: true,
  hideFooter: true,
  opacity: 0,
})

    </div>
  );
}

// const options = [
//   { title: 'Telegram', id: 'telegram' },
//   { title: 'Skype', id: 'skype' },
// ];

export default ContactUs;
