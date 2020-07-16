import Router from 'next/router';

export default class PostForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          title: '',
          author: '',
          description: '',
          ingredients: '',
          steps: '',
          meal_type: '',
          img_src_1: '',
          img_src_2: '',
          img_src_3: '',
          difficulty: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
    }
    handleChange(event) {
        const newState = {
            [event.target.name]: event.target.value
        }

        this.setState(newState);
    }

    handleAuthorChange(e){
      const newState = {
        [event.target.name]: parseInt(e.target.value)
      }

      this.setState(newState);
    }

    handleSubmit(event) {
    //   alert('Recipe Submited');
      event.preventDefault();
      console.log('Submit', this.state);
      this.props.onRecipeCreate(this.state);
      this.setState({
            title: '',
            author: '',
            description: '', 
            ingredients: '',
            steps: '',
            meal_type: '',
            img_src_1: '',
            img_src_2: '',
            img_src_3: '',
            difficulty: '',
        });
      
      Router.push('/recipes/');
    }

    render() {
      return (
        <div className="container">
          <div className="row align-items-start">
            <h2 className='text-center'>Post A Recipe</h2>
            <form className="col-12" onSubmit={this.handleSubmit}>
              <fieldset>
                
                <div className="col-12 col-lg-6 d-inline-block">
                  
                  <div className="form-group row">
                    <label for="title" >Title: </label>
                    <input value={this.state.title} name="title" onChange={this.handleChange} type="text" className="form-control"  placeholder="Enter Recipe Title"/>
                  </div>
                  <div className="form-group">
                    <label for="difficulty">Difficulty: </label>
                    <select value={this.state.difficulty}className="custom-select my-1 mr-sm-2" id="difficulty" name="difficulty" onChange={this.handleChange}>
                      <option selected>Choose...</option>
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="meal_type">Meal type: </label>
                    <select className="custom-select my-1 mr-sm-2" id="meal_type" name="meal_type" value={this.state.meal_type} onChange={this.handleChange}>
                      <option selected>Choose...</option>
                      <option value="Breakfast">Breakfast</option>
                      <option value="Lunch">Lunch</option>
                      <option value="Dinner">Dinner</option>
                      <option value="Dessert">Dessert</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="author">author: </label>
                    <select className="custom-select my-1 mr-sm-2" id="author" name="author" value={this.state.author} onChange={this.handleAuthorChange}>
                      <option selected>Choose...</option>
                      <option value="1">Admin</option>
                      <option value="3">JB</option>
                      <option value="4">Peng Chen</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="img_src_1">Image: </label>
                    <textarea value={this.state.img_src_1} name="img_src_1" onChange={this.handleChange} className="form-control" type="text" id="img_src_1" rows="1"></textarea>
                  </div>
                  <div className="form-group">
                    <label for="description">description: </label>
                    <textarea value={this.state.description} name="description" onChange={this.handleChange} className="form-control" type="text" id="description" rows="2"></textarea>
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-inline-block">
                  <div className="form-group">
                    <label for="ingredients">ingredients: </label>
                    <textarea value={this.state.ingredients} name="ingredients" onChange={this.handleChange} className="form-control" type="text" id="ingredients" rows="5"></textarea>
                  </div>
                  <div className="form-group">
                    <label for="steps">Steps: </label>
                    <textarea value={this.state.steps} name="steps" onChange={this.handleChange} className="form-control" type="text" id="steps" rows="10"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary justify-self-end">Submit</button>
                </div>  
              </fieldset>
            </form>

          </div>

        </div>
      );
    }
}
  
  
 
 