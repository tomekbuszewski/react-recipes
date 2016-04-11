import React from 'react';
import Firebase from 'firebase';
import Ingredient from './Ingredient';

/* Firebase URL */
export default class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.db = new Firebase('https://reactrecipes.firebaseio.com/recipes/'+this.props.params.recipeName);

    this.state = {
      loaded: false,
      data: [],
      ingredients: []
    };
  }

  componentDidMount() {
    this.db.on('value', (data) => {
      this.setState({
        loaded: true,
        data: data.val()
      }, this.getIngredients);
    }, () => { alert('a'); });
  }

  getIngredients() {
    let ing = this.state.data.ingredients;
    let ings = [];

    for(let i in ing) {
      ings.push(
        <li key={ing[i]}><Ingredient id={ing[i]} /></li>
      );
    }

    this.setState({
      ingredients: ings
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.data.name}</h1>
        <h4>Opis przygotowania</h4>
        <p>
          {this.state.data.desc}
        </p>
        <hr/>
        <h4>Składniki</h4>
        <ul>
          {this.state.ingredients}
        </ul>
      </div>
    )
  }
}
