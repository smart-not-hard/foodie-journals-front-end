import Layout from '../components/layout/Layout';
import Intro from '../components/about/Intro';
// import Daily_meal from '../components/home/Daily_meal';


const About = () => (
    <Layout>
        <Intro/>
        {/* <Daily_meal/> */}
    </Layout>

)

// export async function getServerSideProps (context){

//     const url = '';
//     const response = await fetch(url);
//     const data = await response.json();

//     return {
//         props: {
//             data : data,
//         },
//     }
// }

export default About;
