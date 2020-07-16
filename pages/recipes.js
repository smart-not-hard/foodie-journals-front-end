import Layout from '../components/layout/Layout';
import Filter from '../components/recipes/Filter';
import All_recipes from '../components/recipes/All_recipes'


const Recipes = (props) => {
  // for (let i = 0; i<props.length; i++)
  
  return (
    <Layout>
        <Filter/>
        <div className="container text-center mb-5">
          <h2>All of our receipes</h2>
        </div>
        <All_recipes data={props.data}/>
    </Layout>

)}

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

export default Recipes;
