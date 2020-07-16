import ToggleButton from '../components/toggleButton/Button';
import RecipeForm from '../components/recipeForm/Form';


// <>
//     <button className="b" type="submit">
//     Post A Recipe
//     </button>
//     <button className="b" type="submit">
//     Manage Recipes
//     </button>
// </>

export default class Account extends React.Component {
    constructor () {
      super()
      this.state = {
        isHidden: true
      }
    }
    toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden
      })
    }
    render () {
      return (
        <div>
          <button onClick={this.toggleHidden.bind(this)} >
            Click To Post Recipe
          </button>
          {!this.state.isHidden && <RecipeForm />}
        </div>
      )
    }
}

export async function getServerSideProps (context){

    const url = require("../components/url_back");
    const response = await fetch(url);
    const data = await response.json();
  
    return {
      props: {
        data : data,
      },
    }
  }

// const Child = () => (
//   <div className='modal'>
//         Hello, World!
//     </div>
// )