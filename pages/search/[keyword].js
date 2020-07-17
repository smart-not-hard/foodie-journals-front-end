import Layout from '../../components/layout/Layout';
import Filter from '../../components/recipes/Filter';
import All_recipes from '../../components/recipes/All_recipes'
// import { useRouter } from 'next/router'

const Search = (props) => {

  // const router = useRouter()
  if (JSON.stringify(props.data)!=='[]'){
    return (
      <Layout>
          <Filter/>
          <div className="container text-center mb-5">
            <h2>Here's what we found.</h2>
          </div>
          <All_recipes data={props.data}/>
      </Layout>
    )
  } else {
    return (
      <Layout>
          <Filter/>
          <div className="container text-center mb-5">
            <h2>Sorry, we can't find that. Please try with something else.</h2>
          </div>
      </Layout>
    )
  }

}

export async function getServerSideProps (context){
  const keyword = context.query.keyword;
  const url = require("../../components/url_back");
  
  const response = await fetch(`${url}api/recipes/?search=${keyword}`);

  const data = await response.json();
  return {
    props: {
      data : data,
    },
  }
}

export default Search;
