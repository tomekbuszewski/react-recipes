import React from 'react';
import { Link } from 'react-router';

export default class RecipeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Lista przepisów</h1>
        <ul>
          <li><Link to="/przepisy/1/spaghetti">Spaghetti</Link></li>
        </ul>
      </div>
    );
  }
}
