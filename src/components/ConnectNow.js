import { makeStyles, Grid, Typography } from "@material-ui/core";
import CustomButton from "./shared/CustomButton";
import FeatureMetaMask from "../assets/images/metamask-img.svg";
import skyline from "../assets/images/skyline.svg";

const ConnectNow = () => {
  // URLs
  const connect = "https://questcrypto.app";
  const openUrl = (url) => {
    try {
      window.open(url);
    } catch (error) {
      console.log(error);
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      padding: `${theme.spacing(4)}px ${theme.spacing(4)}px`,
    },
    metaMaskOuter: {
      display: "flex",
      justifyContent: "center",
    },
    metaMaskContainer: {
      width: "90%",
      height: "auto",
      background: "linear-gradient(183.26deg, #E6BA73 4.33%, #BA8E4D 95.54%)",
      borderRadius: "12px",
    },
    walletTextDiv: {
      position: "relative",
      zIndex: 2,
      padding: `${theme.spacing(8)}px ${theme.spacing(12)}px`,
      paddingRight: 0,
      "@media (max-width: 900px)": {
        paddingLeft: "24px",
      },
    },
    walletDiv: {
      display: "flex",
      justifyContent: "center",
      paddingTop: "34px",

      [theme.breakpoints.down("md")]: {
        paddingTop: "0",
      },
    },
    title3: {
      paddingBottom: theme.spacing(3),
      fontSize: "36px",
      fontWeight: "bold",
    },
    subTitle3: {
      fontSize: "21px",
      opacity: "0.8",
      paddingBottom: theme.spacing(3),
    },
    connectBtnLabel: {
      color: "#2B2D31",
    },
    btn: {
      background: "#FFF",
      "&:hover": {
        background: "#FFF",
      },
    },
    silloutteImg: {
      display: "block",
      objectFit: "contain",
    },
    metamaskImg: {},
    container: {
      position: "relative",
      width: "100%",
    },

    bgImage: {
      position: "absolute",
      top: "10px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      overflow: "hidden",
      // zIndex:/
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.metaMaskOuter}>
        <div className={classes.metaMaskContainer}>
          <Grid container className={classes.container}>
            <Grid item md={7} xs={12}>
              <div className={classes.walletTextDiv}>
                <Typography
                  variant="h4"
                  gutterBottom
                  className={classes.title3}
                >
                  Join the quest. Connect your wallet.
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  className={classes.subTitle3}
                >
                  It takes seconds to connect your wallet and start exploring
                  the Quest Marketplace
                </Typography>
                <CustomButton classes={{ root: classes.btn }}>
                  <span
                    className={classes.connectBtnLabel}
                    onClick={() => openUrl(connect)}
                  >
                    CONNECT
                  </span>
                </CustomButton>
              </div>
            </Grid>
            <Grid item md={5} xs={12}>
              <div
                className={classes.walletDiv}
                // style={{ position: "relative" }}
              >
                <img
                  src={FeatureMetaMask}
                  alt="Meta Mask Fox"
                  className={classes.metamaskImg}
                />
              </div>
            </Grid>
            <div className={classes.bgImage}>
              <img
                src={skyline}
                alt="Skyline-Silloutte"
                className={classes.silloutteImg}
              />
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ConnectNow;
