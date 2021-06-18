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
  { heading: 'Marketplace', content: 'The QUEST Crypto marketplace provides transparency for all pledged properties through a tracking system which gives access to necessary property-specific documents. QUEST uses a proprietary patent-pending method on each property to insure against depreciation, damage, and adverse equity claims.' },
  { heading: 'Realizing Equity Value', content: 'Real Estate is the largest untapped traditionally illiquid asset in the world. Previously, the only way to access this equity was through outdated processes that increased property debt and were exclusionary in nature. Quest Crypto enables any property owner to realize 100% of their property equity.' },
  { heading: 'Method', content: 'QUEST Crypto’s proprietary patent-pending technology irrevocably binds the token to the DNA of the property. QUEST is superior to mortgages, liens, and other claims on the title.' }
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

  // URLs 
  const faq1 = 'https://questcryp.to/faq1';
  const faq2 = 'https://questcryp.to/faq2';
  const faq3 = 'https://questcryp.to/faq3';
  const openUrl = (index) => {
    try {
      if (index === 0) {
        window.open(faq1);
      } else if (index === 1) {
        window.open(faq2);
      } else if (index === 2) {
        window.open(faq3);
      }
    } catch (error) { console.log(error) }
  }

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
                      <CustomButton size="small" onClick={() => openUrl(i)}>LEARN MORE</CustomButton>
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