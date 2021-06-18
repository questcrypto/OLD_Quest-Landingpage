import { ThemeProvider, CssBaseline, makeStyles } from '@material-ui/core';

import { theme } from './components/shared/theme';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import KnabCountDown from './components/KnabCountDown';
import KnabGrab from './components/KnabGrab';
import CrowdSaleContract from './components/CrowdSaleContract';
import ConnectNow from './components/ConnectNow';
import Faq from './components/Faq';
// import NewsLetter from './components/NewsLetter';
import StartQuest from './components/StartQuest';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const useStyles = makeStyles(theme => ({
  bodyDiv: {
    position: 'relative', 
    top: '96px',
    height: 'calc(100vh - 96px)',
    overflow: 'auto'
  }
}));

const App = () => {

  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <div className={classes.bodyDiv}>
          <Home />
          <Features />
          <KnabCountDown />
          <KnabGrab />
          <CrowdSaleContract />
          <ConnectNow />
          <About />
          <Faq />

          {/* Removed from Landing Page */}
          {/* <NewsLetter /> */}

          <StartQuest />
          <ContactUs />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
