import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul role="navigation">
        <li><Link to="/">Strona główna</Link></li>
        <li><Link to="/przepisy">Przepisy</Link></li>
      </ul>
    )
  }
}
