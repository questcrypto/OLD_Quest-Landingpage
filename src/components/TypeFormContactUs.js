import React from 'react';
import { Widget } from '@typeform/embed-react';
import { makeStyles, Typography, Grid, Card, CardContent } from '@material-ui/core';

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

const TypeFormContactUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Grid container>
        <Grid item md={3}></Grid>
        <Grid item md={6} xs={12}>
          <div className={classes.formDiv}>
            <Card className={classes.cardDiv}>
              <CardContent className={classes.cardContentDiv}>
                <div style={{ width: '100%', height: '46.0em' }}>
                  <Widget id="Y1Ukw7Ic" style={{ width: '100%', height: '100%' }} />
                </div>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item md={3}></Grid>
       </Grid>
    </div>
  );
};

export default TypeFormContactUs;
