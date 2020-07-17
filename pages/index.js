import Layout from '../components/layout/Layout';
import Carousel from '../components/home/Carousel';
import Daily_meal from '../components/home/Daily_meal';
import axios from 'axios';

const Home = (props) => (
    <Layout>
        <Carousel data={props}/>
        <Daily_meal data={props}/>
    </Layout>

)

export async function getServerSideProps (context){

  // const authRes = await axios.post('http://127.0.0.1:8000/api/token/', {username:'admin', password: '12345'});

  // let accessToken = authRes.data.access;


  // const refreshRes = await axios.post('http://127.0.0.1:8000/api/token/refresh/', {refresh:authRes.data.refresh});
  // console.log('refreshed token', refreshRes.data)
  // accessToken = refreshRes.data.access;
  
  // const config = {
  //   headers: { "Authorization": "Bearer " + accessToken }
  // }

  const url = require("../components/url_back");

  const url_breakfast = url + 'api/recipes/breakfast/'
  const response_breakfast = await axios.get(url_breakfast);
  const data_breakfast = response_breakfast.data

  const url_lunch = url + "api/recipes/lunch/";
  const response_lunch = await axios.get(url_lunch);
  const data_lunch = response_lunch.data;

  const url_dinner = url + "api/recipes/dinner/";
  const response_dinner = await axios.get(url_dinner);
  const data_dinner = response_dinner.data;

  let all_meal = data_breakfast.concat(data_lunch).concat(data_dinner);

  return {
    props: {
      breakfast: data_breakfast,
      lunch: data_lunch,
      dinner: data_dinner,
      all: all_meal,
    }
  };
  
}


export default Home;