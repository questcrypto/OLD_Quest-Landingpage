import { makeStyles, Button as MuiButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // boxShadow: `0px 3px 1px -2px rgba(30, 52, 68, 0.2), 0px 2px 2px rgba(30, 52, 68, 0.14),
    //   0px 1px 5px rgba(30, 52, 68, 0.12)`,
    borderRadius: "2px",
    "&:disabled": {
      backgroundColor: theme.palette.primary.main,
      color: "#FFF",
      opacity: 0.8,
    },
  },
}));

const CustomButton = (props) => {
  const classes = useStyles();

  const { variant, color, size, onClick, knab, ...other } = props;

  return !knab ? (
    <MuiButton
      variant={variant || "contained"}
      color={color || "primary"}
      size={size || "large"}
      onClick={onClick}
      // disableElevation
      // disableFocusRipple
      // disableRipple
      {...other}
      className={classes.root}
    >
      {props.children}
    </MuiButton>
  ) : (
    <div className="hoverme">
      <span>
        <MuiButton
          variant={variant || "contained"}
          color={color || "primary"}
          size={size || "large"}
          onClick={onClick}
          // disableElevation
          // disableFocusRipple
          // disableRipple
          {...other}
          className={classes.root}
        >
          {props.children}
        </MuiButton>
      </span>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
      <i className="animation__i"></i>
    </div>
  );
};

export default CustomButton;
