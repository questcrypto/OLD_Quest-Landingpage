import {
  makeStyles,
  Input as MuiInput,
  TextField,
  InputAdornment
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: '8px 0px',
    margin: '4px 0px',
    '& .MuiInput-root': {
      width: '100%',
      borderBottom: '1px solid #E2E4E5',
    }
  },

}));

const CustomInput = (props) => {

  const classes = useStyles();

  const { id, ia, ...other } = props;

  return (
    <MuiInput
      id={id}
      startAdornment={
        <InputAdornment position="start">
          {ia ? ia : null}
        </InputAdornment>
      }
      // fullWidth={true}
      {...other}
      className={classes.root}
    />
  );
}

export default CustomInput;