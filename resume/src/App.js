import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { Container, Grid} from "@material-ui/core"
import Profile from './components/profile/Profile.jsx'
import Header from './components/header/Header.jsx'
import Portfolio from './components/pages/portfolio/Portfolio.jsx'
import Resume from './components/pages/resume/Resume.jsx'
import Footer from './components/footer/Footer.jsx'
import Contact from './components/pages/contact/Contact.jsx'

import './App.css';

function App() {
  return (
    // <div className="app">
    //   <h1>Hi</h1>
    // </div>
    <Container className="top_60">
      <Grid container spacing={5}>
        <Grid item xs={12}sm={12}md={4}lg={3}>
          <Profile/>
        </Grid>
        <Grid item xs>
         
         <Router>
         <Header/>
         <div className="main__content container-shadow">
         <Switch>
           <Route path="/contact"><Contact/></Route>
           <Route path="/portfolio"><Portfolio/></Route>
           <Route path="/"><Resume/></Route>
           
          </Switch>
         </div>
        
         </Router>          
         <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
