import React from 'react';

import Navigation from './Navigation';
import StartPage from './StartPage';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation />
        <main>
          { this.props.children || <StartPage /> }
        </main>
      </div>
    )
  }
}
