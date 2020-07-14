import Layout from '../components/layout/Layout';
import Filter from '../components/receipes/Filter';



const Receipes = () => (
    <Layout>
        <Filter/>
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

export default Receipes;
