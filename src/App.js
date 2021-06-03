import { ThemeProvider, CssBaseline, makeStyles } from '@material-ui/core';

import { theme } from './components/shared/theme';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import Faq from './components/Faq';
import NewsLetter from './components/NewsLetter';
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
          <About />
          <Faq />
          <NewsLetter />
          <ContactUs />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
