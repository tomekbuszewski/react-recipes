import React from 'react';
import { Link } from 'react-router';
import Firebase from 'firebase';

/* Firebase URL */
const database = 'https://reactrecipes.firebaseio.com/recipes';

export default class RecipeList extends React.Component {
  constructor(props) {
    super(props);

    this.db = new Firebase(database);

    this.state = {
      loaded: false,
      data: [],
      list: null
    };
  }

  componentDidMount() {
    this.db.once('value', (data) => {
      this.setState({
        loaded: true,
        data: data.val()
      }, this.printList);
    });
  }

  printList() {
    const list = this.state.data;
    let links = [];

    for(let item in list) {
      links.push(
        <li key={list[item].id}>
          <Link to={'/przepisy/' + list[item].id + '/' + list[item].slug}>{list[item].name}</Link>
        </li>
      );
    }

    this.setState({
      list: links
    })
  }

  render() {
    return (
      <div>
        <h1>Lista przepisów</h1>
        <ul>
          {this.state.list}
        </ul>
      </div>
    );
  }
}
