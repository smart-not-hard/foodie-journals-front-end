import React from 'react';
import Router from 'next/router';

export default class Filter extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        type : '',
        diff : '',
    };
    this.typeHandler = this.typeHandler.bind(this);
    this.diffHandler = this.diffHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  typeHandler(e){
    this.setState({
      type: e.target.value,
      ...this.state.diff,
    })
  }

  diffHandler(e){
    this.setState({
      diff: e.target.value,
      ...this.state.type,
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let keyword = `${this.state.type} ${this.state.diff}`;
    console.log(keyword);
    if (keyword !== '' && keyword !== ' '){
      Router.push(`/search/${keyword}`)
    } else {
      Router.push('/recipes/')
    }
  };

  render(){
    return (
      <div className="container p-5">
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="mr-5">
          <label className="my-1 mr-2 d-inline" htmlFor="meal_type">Meal Type</label>
          <select className="custom-select my-1 mr-sm-2" id="meal_type" name="meal_type" onChange={this.typeHandler}>
            <option selected>Choose...</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <div className="mr-5">
          <label className="my-1 mr-2 d-inline" htmlFor="difficulty">Difficulty</label>
          <select className="custom-select my-1 mr-sm-2" id="difficulty" name="difficulty" onChange={this.diffHandler}>
            <option selected>Choose...</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

        </div>

        <button type="submit" className="btn btn-primary my-1">Find it</button>
      </form>
    </div>
    )
  }
}
