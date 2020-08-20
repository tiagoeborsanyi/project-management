import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


import Header from './layout/header/header';
import Projects from './layout/projects/projects';
import Project from './layout/project/project';
import Footer from './layout/footer/footer';
import Modal from './components/modal/modal';
import Form from './components/form/form';
import FloatButton from './components/float-button/float-button'

function App() {
  const [show, setShow] = useState(false)

  const routes = (
    <Switch>
      <Route path='/' exact component={Projects} />
      <Route path='/project/:id' component={Project} />
      <Redirect to='/' />
    </Switch>
  )

  return (
    <Router>
      <Modal show={show}>
        <Form />
      </Modal>
      <Header />
      <main>
        {routes}
      </main>
      <FloatButton clicked={() => setShow(!show)} />
      <footer className='footer'>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
