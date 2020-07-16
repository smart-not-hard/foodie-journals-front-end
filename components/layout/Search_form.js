import React from 'react';
import Router from 'next/router';

class Search_form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInput(e){
    // let input = e.target.name;
    // if (input === "search"){

    // }

    this.setState({
      search: e.target.value,
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let keyword = this.state.search;
    if (keyword !== ''){
      Router.push(`/search/${keyword}`)
    } else {
      Router.push('/recipes/')
    }
  }
  render(){
    return (
      <form id="search-form" className="form-inline ml-auto" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input type="text" className="form-control border-dark" placeholder="Search" id="search" name="search" value={this.state.search} onChange={this.handleInput} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" >Go</button>
          </div>
        </div>
      </form>
    )
  }
}

export default Search_form;
