import { makeStyles, Button as MuiButton } from "@material-ui/core";
import { useEffect } from "react";
import confetti from "canvas-confetti";

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

  // button animation

  // const makeAnimationOne = () => {
  //   const confettiSound = new Audio(
  //     "https://www.soundjay.com/misc/sounds/whip-whoosh-02.mp3"
  //   );
  //   confettiSound.play();
  //   doItHard();
  // };
  // const makeAnimationTwo = () => {
  //   const confettiSound = new Audio(
  //     "https://www.soundjay.com/misc/sounds/whip-whoosh-02.mp3"
  //   );
  //   confettiSound.play();
  //   doIt();
  // };

  useEffect(() => {
    const butt = document.querySelector(".confetti");
    console.log(butt);
    const doItNow = (evt, hard) => {
      const direction = Math.sign(lastX - evt.clientX);
      lastX = evt.clientX;
      const particleCount = hard ? r(12, 45) : r(2, 15);
      confetti({
        particleCount,
        angle: r(90, 90 + direction * 30),
        spread: r(10, 10),
        origin: {
          x: evt.clientX / window.innerWidth,
          y: evt.clientY / window.innerHeight,
        },
      });
    };
    // const confettiSound = new Audio(
    //   "https://www.soundjay.com/misc/sounds/whip-whoosh-02.mp3"
    // );
    const doIt = (evt) => {
      doItNow(evt, false);

      // confettiSound.play();
    };
    const doItHard = (evt) => {
      doItNow(evt, true);
    };

    let lastX = 0;

    function r(mi, ma) {
      return parseInt(Math.random() * (ma - mi) + mi);
    }

    butt.addEventListener("mouseenter", doIt);
    // butt.addEventListener("click", doItHard);
  }, []);

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
    <MuiButton
      variant={variant || "contained"}
      color={color || "primary"}
      size={size || "large"}
      onClick={onClick}
      {...other}
      className={`${classes.root} confetti`}
    >
      {props.children}
    </MuiButton>
    // <div className="hoverme">
    //   <span>
    //     <MuiButton
    //       variant={variant || "contained"}
    //       color={color || "primary"}
    //       size={size || "large"}
    //       onClick={onClick}
    //       // disableElevation
    //       // disableFocusRipple
    //       // disableRipple
    //       {...other}
    //       className={`${classes.root} confetti`}
    //     >
    //       {props.children}
    //     </MuiButton>
    //   </span>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    //   <i className="animation__i"></i>
    // </div>
  );
};

export default CustomButton;
