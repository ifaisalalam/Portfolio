import React from 'react';
import './App.css';

import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

class App extends React.Component<any, any> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <>
        <header id="head">
          <Header />
        </header>
        <main>
          <div className="container-fluid container">
            <div className="row">
              <div className="col s12">
                <Projects />
              </div>
            </div>

            <div className="row">
              <div className="col s12">
                <Skills />
              </div>
            </div>
          </div>
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </>
    );
  }
}

export default App;
