import Layout from '../components/layout/Layout';
import Filter from '../components/receipes/Filter';
import All_receipes from '../components/receipes/All_receipes'


const Receipes = (props) => {
  // for (let i = 0; i<props.length; i++)
  
  return (
    <Layout>
        <Filter/>
        <All_receipes data={props.data}/>
    </Layout>

)}

export async function getServerSideProps (context){

    // const url = 'http://127.0.0.1:8000/api/receipes';
    const url = 'https://foodie-journals.herokuapp.com/api/receipes/';
    const response = await fetch(url);
    const data = await response.json();

    return {
        props: {
            data : data,
        },
    }
}

export default Receipes;
