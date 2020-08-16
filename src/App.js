import React from 'react';

import Header from './layout/header/header';
import Projects from './layout/projects/projects';
import Footer from './layout/footer/footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Projects />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
