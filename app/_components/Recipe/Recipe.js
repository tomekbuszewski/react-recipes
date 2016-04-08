import React from 'react';

export default class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Przepis</h1>
        <dl>
          <dt>{this.props.params.recipeName}</dt>
          <dd>ID: {this.props.params.recipeID}</dd>
        </dl>
      </div>
    )
  }
}
