import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


import Header from './layout/header/header';
import Projects from './layout/projects/projects';
import Project from './layout/project/project';
import Footer from './layout/footer/footer';

const routes = (
  <Switch>
    <Route path='/' exact component={Projects} />
    <Route path='/project/:id' component={Project} />
    <Redirect to='/' />
  </Switch>
)

function App() {
  return (
    <Router>
      <Header />
      <main>
        {routes}
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
