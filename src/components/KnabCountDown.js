import { makeStyles, Typography, Paper } from "@material-ui/core";
import { useState, useEffect } from "react";
import KNABImg from "../assets/images/KNAB.png";
import CustomButton from "./shared/CustomButton";
import Telegram from "../assets/icons/telegram_black.svg";
import Twitter from "../assets/icons/twitter_black.svg";
import Instagram from "../assets/icons/instagram_black.svg";
import Reddit from "../assets/icons/reddit_black.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(6)}px ${theme.spacing(4)}px`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  heading: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    paddingLeft: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    color: "#302E35",
  },
  subTitle: {
    color: "#302E35",
    padding: `${theme.spacing(4)}px 0px`,
  },
  smDiv: {
    padding: `${theme.spacing(4)}px 0px`,
  },
  smIcons: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  smIcon: {
    paddingRight: theme.spacing(1.5),
    paddingTop: theme.spacing(2),
    cursor: "pointer",
  },
  timerDiv: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: theme.spacing(4),
  },
  timePaper: {
    padding: theme.spacing(1),
    marginRight: theme.spacing(3),
    width: "125px",
    height: "125px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  timeText: {
    fontSize: "36px",
    fontWeight: "bold",
  },
  timeLabel: {
    fontSize: "14px",
  },
  btnDiv: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  btn: {
    "&:hover": {},
  },
}));

const KnabCountDown = () => {
  // URLs
  const grabKnab = "https://questcrypto.app";
  const telegram = "https://questcryp.to/telegramshare";
  const reddit = "https://questcryp.to/redditshare";
  const twitter = "https://questcryp.to/twittershare";
  const instagram = "https://questcryp.to/instagramshare";

  const openUrl = (url) => {
    try {
      window.open(url);
    } catch (error) {
      console.log(error);
    }
  };

  const classes = useStyles();
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let countDownDate = new Date("August 31, 2021 00:00:00").getTime();
    // Update the count down every 1 second
    let data = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({
        ...time,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });

      // If the count down is over
      if (distance < 0) {
        clearInterval(data);
        setTime({ ...time, days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
  }, []);

  return (
    <div id="ico" className={classes.root}>
      <div className={classes.heading}>
        <img src={KNABImg} alt="" />
        <Typography variant="h4" className={classes.title}>
          KNAB Countdown
        </Typography>
      </div>
      <div className={classes.subTitle}>
        <Typography variant="h6">
          The worlds of real estate and crypto have changed! Buy KNAB Now. The IGO ends in ...
        </Typography>
      </div>
      <div className={classes.timerDiv}>
        <Paper className={classes.timePaper} elevation={3}>
          <div className={classes.timeText}>{time.days}</div>
          <div className={classes.timeLabel}>Days</div>
        </Paper>
        <Paper className={classes.timePaper} elevation={3}>
          <div className={classes.timeText}>{time.hours}</div>
          <div className={classes.timeLabel}>Hours</div>
        </Paper>
        <Paper className={classes.timePaper} elevation={3}>
          <div className={classes.timeText}>{time.minutes}</div>
          <div className={classes.timeLabel}>Minutes</div>
        </Paper>
        <Paper className={classes.timePaper} elevation={3}>
          <div className={classes.timeText}>{time.seconds}</div>
          <div className={classes.timeLabel}>Seconds</div>
        </Paper>
      </div>
      <div className={classes.btnDiv}>
        <CustomButton
          knab={true}
          classes={{ root: classes.btn }}
          onClick={() => openUrl(grabKnab)}
        >
          GRAB KNAB
        </CustomButton>
      </div>
      <div className={classes.smDiv}>
        <Typography variant="h6">
          What are you waiting for? Tell your friends!
        </Typography>
        <div className={classes.smIcons}>
          <img
            src={Telegram}
            alt="Telegram"
            onClick={() => openUrl(telegram)}
            className={classes.smIcon}
          />
          <img
            src={Reddit}
            alt="Reddit"
            onClick={() => openUrl(reddit)}
            className={classes.smIcon}
          />
          <img
            src={Twitter}
            alt="Twitter"
            onClick={() => openUrl(twitter)}
            className={classes.smIcon}
          />
          <img
            src={Instagram}
            alt="Instagram"
            onClick={() => openUrl(instagram)}
            className={classes.smIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default KnabCountDown;
