import RecipeForm from '../components/recipeForm/Form';
import axios from 'axios';
import React from 'react';
import Layout from '../components/layout/Layout'
// const url = 'https://foodie-journal.herokuapp.com/api/recipes/create';
const url = require("../components/url_back");
const post_url = url+'api/recipes/create/'

export default class Account extends React.Component {
  constructor(props) {
      super(props);
      this.recipeCreateHandler = this.recipeCreateHandler.bind(this);
      
  }
  
  async recipeCreateHandler(recipe) {
    // console.log(recipe);
    let accessToken= window.localStorage.getItem("accessToken")
    console.log(accessToken)
    const config = {
      headers: { "Authorization": "Bearer " + accessToken }
    }
    const response = await axios.post(post_url, recipe, config);
    // console.log(response.data)
  }

  render() {
      return (
        <Layout>
          
          <RecipeForm onRecipeCreate={this.recipeCreateHandler} />
        </Layout>
      )
    }
}
