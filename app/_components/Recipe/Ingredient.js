import React from 'react';
import Firebase from 'firebase';

export default class Ingredient extends React.Component {
  constructor(props) {
    super(props);

    this.id = this.props.id;
    this.db = new Firebase('https://reactrecipes.firebaseio.com/ingredients/'+this.props.id);

    this.state = {
      loaded: false,
      data: []
    };
  }

  componentDidMount() {
    this.db.once('value', (data) => {
      this.setState({
        loaded: true,
        data: data.val()
      });
    });
  }

  render() {
    return (
      <strong>{this.props.id} - {this.state.data.name}</strong>
    )
  }
}
