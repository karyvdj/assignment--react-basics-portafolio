import React, { Component } from 'react';

import PortfolioFixed from './components/PortfolioFixed';
import PortfolioContent from './components/PortfolioContent';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <PortfolioFixed/>
        <PortfolioContent/>
      </div>
    );
  }
}

export default App;
