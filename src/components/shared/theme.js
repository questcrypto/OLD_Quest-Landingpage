import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

// import NexaBold from '../../assets/fonts/NexaBold.otf';
// import NexaRegular from '../../assets/fonts/NexaRegular.otf';
// import NexaLight from '../../assets/fonts/NexaLight.otf';
// import NexaThin from '../../assets/fonts/NexaThin.otf';

const temp = createMuiTheme({
  palette: {
    primary: {
      main: '#1E3444',
    },
    background: {
      default: '#FFFEFE'
    },
    typography: {
      color: '#302E35',
      fontFamily: 'NexaRegular'
    },
  }
});

const theme = responsiveFontSizes(temp);

export { theme };