import Layout from '../components/layout/Layout';
import Carousel from '../components/home/Carousel';
import Daily_meal from '../components/home/Daily_meal';


const Home = (props) => (
    <Layout>
        <Carousel/>
        <Daily_meal data={props}/>
    </Layout>

)

export async function getServerSideProps (context){

  // const url = 'https://foodie-journals.herokuapp.com/api/receipes/breakfast/';
  const url_breakfast = "http://127.0.0.1:8000/api/receipes/breakfast";
  const response_breakfast = await fetch(url_breakfast);
  const data_breakfast = await response_breakfast.json();

  const url_lunch = "http://127.0.0.1:8000/api/receipes/lunch/"
  const response_lunch = await fetch(url_lunch);
  const data_lunch = await response_lunch.json();

  const url_dinner = "http://127.0.0.1:8000/api/receipes/dinner/"
  const response_dinner = await fetch(url_dinner);
  const data_dinner = await response_dinner.json();

  return {
    props: {
      breakfast: data_breakfast,
      lunch: data_lunch,
      dinner: data_dinner,
    }
  };
  
}


export default Home;