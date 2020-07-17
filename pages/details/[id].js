import Layout from '../../components/layout/Layout';


const Recipe_info = (props) => {

  return (
  <Layout>
    <div  className="container mb-3 p-0" >
      <div className="col-12 mb-3">
        <div key={props.data.id} className="meal-details card mx-auto m-0">
          <img className=" meal-details-img d-block mx-auto m-4" src={props.data.img_src_1 } alt="breakfast"/>
          <div className="card-body" style={{ whiteSpace: "pre-wrap"}}>
            <h4 className="card-title">{props.data.title}</h4>
            <h6 className="card-subtitle">
              {props.data.description}
            </h6>
            <h5 className="card-subtitle mr-3 mt-3 mb-3">Meal Type</h5>
            <p className="card-text">
              {props.data.meal_type}
            </p>
            <h5 className="card-subtitle mr-3 mt-3 mb-3">Ingredients</h5>
            <p className="card-text">
              {props.data.ingredients}
            </p>
            <h5 className="card-subtitle mr-3 mt-3 mb-3">Steps</h5>
            <p className="card-text">
              {props.data.steps}
            </p>


            
          </div>
        </div>
      </div>
    </div>
  </Layout>
)};

export default Recipe_info;

export async function getServerSideProps(context){
  const id = context.query.id;
  const url = require("../../components/url_back");

  const response = await fetch(`${url}api/recipes/${id}`);

  const data = await response.json();

  return {
    props: {
      data:data
    }
  }
}