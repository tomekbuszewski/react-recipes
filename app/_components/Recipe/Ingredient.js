import React from 'react';
import Firebase from 'firebase';

export default class Ingredient extends React.Component {
  constructor(props) {
    super(props);

    this.id = this.props.id;
    this.db = new Firebase('https://reactrecipes.firebaseio.com/ingredients');

    this.state = {
      loaded: false,
      data: null
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
    if(this.state.loaded) {
      return <span>{this.state.data[this.props.id].name}</span>;
    } else {
      return false;
    }
  }
}
