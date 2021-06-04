// import { useEffect } from 'react';
import {
  makeStyles,
  TextField
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
      marginTop: '7px'
      // bottom: '9px'
    },
    '& .MuiInputLabel-formControl': {
      top: '-24px'
    }
  },
  labelText: {
    position: 'relative', 
    bottom: '5px', 
    color: '#302E35'
  }
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

  const { id, name, icon, ...other } = props;

  // useEffect(() => {
  //   defaultProps.options = options;
  // }, [])

  return (
    <Autocomplete
      {...defaultProps}
      id={id}
      disabled
      renderInput={
        (params) => <TextField 
          {...params} 
          label={
            <>
              <img src={icon} alt={name} />&nbsp;&nbsp;
              <span className={classes.labelText}>{name}</span>
            </>
          } 
          // margin="normal" 
      />
      }
      {...other}
      className={classes.root}
    />
  );
}

export default CustomSelect;