import Link from 'next/link';
import Login from './Login';
import Signup from './Signup';


const Navbar = () => (
  <nav className="container navbar navbar-expand-lg navbar-light mt-3 mb-3">
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

      <form id="search-form" className="form-inline ml-auto" action="/search" method="post">
        <div className="input-group">
          <input type="text" className="form-control border-dark" placeholder="Search" id="search" name="search" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" onClick={e=>document.getElementById('search-form').action = '/search/'+document.getElementById('search').value}>Go</button>
          </div>
        </div>
      </form>
      <ul className="navbar-nav ml-auto large mb-2 mb-md-0">
        <li className="nav-item active">
          <a className="nav-link py-2 ml-3 mt-3" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link py-2 ml-3 mt-3" href="/recipes">Recipes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link py-2 ml-3 mt-3" href="#modalLoginForm" data-toggle="modal">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link py-2 ml-3 mt-3" href="#modalRegisterForm" data-toggle="modal">Create Account</a>
        </li>
      </ul>
    </div> {/* collapse navbar-collapse */}
    
    <Login/>
    <Signup/>


  </nav>
)

export default Navbar;
