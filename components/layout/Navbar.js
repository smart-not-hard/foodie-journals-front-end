import Link from 'next/link';

const Navbar = () => (
    <nav className="container navbar navbar-expand-lg navbar-light mt-3 mb-3">
        {/* <style>
        .nav-img {
            width: 80px;
        }
        </style> */}
        <a href="/" className="navbar-brand ml-3 d-none d-sm-inline-block">
            <img className="nav-img rounded-circle" src="assets/logo.png" alt="Logo" style={{width:"80px"}}/>
        </a>
        <a className="navbar-brand d-inline-block mx-auto" href="/">
            <h1>Foodie Journals</h1>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse w-50 flex-md-column " id="navbarCollapse">

            <form className="form-inline ml-auto">
                <div className="input-group">
                    <input type="text" className="form-control border-dark" placeholder="Search"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button"><i className="fa fa-search"></i>Go</button>
                    </div>
                </div>
            </form>
            <ul className="navbar-nav ml-auto large mb-2 mb-md-0">
                <li className="nav-item active">
                    <a className="nav-link py-2 ml-3 mt-3" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link py-2 ml-3 mt-3" href="#">Receipes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link py-2 ml-3 mt-3" href="#">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link py-2 ml-3 mt-3" href="#">Create Account</a>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar;
