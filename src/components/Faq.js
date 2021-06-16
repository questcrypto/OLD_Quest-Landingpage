import {
  makeStyles,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import CustomButton from './shared/CustomButton';
import CryptoCover from '../assets/images/cryptoCover2.png';
import Dots from '../assets/images/dots.png';
import Question from '../assets/images/question.png';


const accordionItems = [
  { heading: 'Question 1', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
  { heading: 'Question 2', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
  { heading: 'Question 3', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }
];

const useStyles = makeStyles(theme => ({
  mainDiv: {
    // padding: theme.spacing(2)
  },
  mainHeading: {
    textAlign: 'center',
    padding: theme.spacing(8),
    fontWeight: 'bold'
  },
  accordionRoot: {
    minHeight: '72px',
    marginBottom: theme.spacing(2)
  },
  accordionSummary: {
    minHeight: '72px'
  },
  heading: {
    fontSize: '22px',
    color: '#838286'
  },
  expandIcon: {},
  summaryContent: {
    background: '#F5F5F5'
  },
  coverDiv: {
    position: 'absolute',
    // left: '87%'
  },
  absoluteClass: {
    position: 'absolute',
  }
}));


const Faq = (props) => {
  const classes = useStyles();

  return (
    <>
      <div id="faq" className={classes.mainDiv}>
        <img src={Dots} className={classes.absoluteClass} alt='' />
        <Typography variant="h4" className={classes.mainHeading}>
          Frequently Asked Questions
      </Typography>
        <div>
          <Grid container>
            <Grid item md={2}>
              <img src={Question} className={classes.absoluteClass} alt='' />
            </Grid>
            <Grid item md={8} xs={12}>
              {accordionItems.map((item, i) => {
                return (
                  <Accordion key={i} classes={{ root: classes.accordionRoot }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      classes={{
                        root: classes.accordionSummary,
                        expandIcon: classes.expandIcon
                      }}
                    >
                      <Typography className={classes.heading}>{item.heading}</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      classes={{
                        root: classes.summaryContent
                      }}
                    >
                      <Typography>
                        {item.content} &nbsp;
                      <CustomButton size="small">LEARN MORE</CustomButton>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Grid>
            <Grid item md={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div className={classes.coverDiv}>
                <img src={CryptoCover} alt="" />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Faq;