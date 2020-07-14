import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => (
    <div>
        <Head>
            <title>Foodie journals</title>
            <link rel="Stylesheet" href="https://bootswatch.com/4/sketchy/bootstrap.css"/>
        </Head>
        <Navbar />
        <div>
            {props.children}
        </div>

        <Footer />


    </div>
);

export default Layout;
