import { useEffect } from 'react';
import {
  makeStyles,
  TextField,
  InputAdornment
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: '8px 0px',
    margin: '4px 0px',
    '& .MuiInput-root': {
      width: '95%',
      borderBottom: '1px solid #E2E4E5',
      position: 'relative',
      bottom: '9px'
    }
  },

}));

const CustomSelect = (props) => {

  const classes = useStyles();

  let defaultProps = {
    options: [
      { title: 'Telegram', id: 'telegram' },
      { title: 'Skype', id: 'skype' },
    ],
    getOptionLabel: (option) => option.title,
  };

  const { id, options, ...other } = props;

  useEffect(() => {
    defaultProps.options = options;
  }, [])

  return (
    <Autocomplete
      {...defaultProps}
      id={id}
      renderInput={(params) => <TextField 
        {...params} 
        margin="normal" />}
      {...other}
      className={classes.root}
    />
  );
}

export default CustomSelect;