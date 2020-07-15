import Layout from '../../components/layout/Layout';


const Recipe_info = (props) => (
  <Layout>
    <div  className="container mb-3" >
      <div className="col-12 mb-3">
        <div key={props.data.id} className="meal-details card mx-auto">
          <img className="meal-img card-img-top d-block mx-auto m-2" src={props.data.img_src_1 } alt="breakfast"/>
          <div className="card-body">
            <h4 className="card-title">{props.data.title}</h4>
            <h5 className="card-subtitle">
              {props.data.description}
            </h5>

            
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Recipe_info;

export async function getServerSideProps(context){
  const id = context.query.id;
  const url = require("../../components/url_back");

  const response = await fetch(`${url}${id}`);

  const data = await response.json();

  return {
    props: {
      data:data
    }
  }
}