import RecipeForm from '../recipeForm/Form';
// import url_back from '../url_back';
import axios from 'axios';
import Layout from '../layout/Layout'
export default class RenderRecipeForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          recipe: props.recipe
      }
      this.recipeCreateHandler = this.recipeCreateHandler.bind(this);
  }
  

  async recipeCreateHandler(RecipeForm) {

      const response = await axios.post("https://foodie-journal.herokuapp.com/recipes/", RecipeForm);

      const savedRecipe = response.data;

      const updatedRecipe = this.state.recipe.concat(savedRecipe);

      this.setState({
          recipe: updatedRecipe
      })

      // Stretch: how can you make even snappier?
  }

  render() {
      return (
        <Layout>
          {/* <Filter/> */}
          <RecipeForm onRecipeCreate={this.props.recipeCreateHandler} />
          {/* <All_recipes data={props.data}/> */}
        </Layout>
      )
  }
}
export async function getServerSideProps() {

    const response = await fetch(url);
    const recipe = await response.json();

    return {
        props: {
            recipe: recipe,
        },
    }
}