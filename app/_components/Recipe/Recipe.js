import React from 'react';
import Firebase from 'firebase';

/* Firebase URL */
export default class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.db = new Firebase('https://reactrecipes.firebaseio.com/recipes/'+this.props.params.recipeName);

    this.state = {
      loaded: false,
      data: []
    };
  }

  componentDidMount() {
    this.db.on('value', (data) => {
      this.setState({
        loaded: true,
        data: data.val()
      });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.data.name}</h1>
        <p>
        {this.state.data.desc}
        </p>
      </div>
    )
  }
}
