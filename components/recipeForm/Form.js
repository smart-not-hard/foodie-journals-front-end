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
    }
    handleChange(event) {
        const newState = {
            [event.target.name]: event.target.value
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
    }

    render() {
      return (
   
        <form onSubmit={this.handleSubmit}>
            <fieldset>
            <h2>Post A Recipe</h2>
                <div className="form-group row">
                    <label for="exampleInputEmail1" >Title: </label>
                    <input value={this.state.title} name="title" onChange={this.handleChange} type="text" class="form-control"  placeholder="Enter Recipe"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputUsername">author: </label>
                    <input value={this.state.author} name="author" onChange={this.handleChange} type="text" class="form-control" placeholder="author"/>
                </div>
                <div className="form-group">
                    <label for="exampleTextarea">description: </label>
                    <textarea value={this.state.description} name="description" onChange={this.handleChange} class="form-control" type="text" id="exampleTextarea" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleTextarea">ingredients: </label>
                    <textarea value={this.state.ingredients} name="ingredients" onChange={this.handleChange} class="form-control" type="text" id="exampleTextarea" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleTextarea">Steps: </label>
                    <textarea value={this.state.steps} name="steps" onChange={this.handleChange} class="form-control" type="text" id="exampleTextarea" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleTextarea">Meal type: </label>
                    <textarea value={this.state.meal_type} name="meal_type" onChange={this.handleChange} class="form-control" type="text" id="exampleTextarea" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleTextarea">Image: </label>
                    <textarea value={this.state.img_src_1} name="img_src_1" onChange={this.handleChange} class="form-control" type="text" id="exampleTextarea" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleTextarea">Difficulty: </label>
                    <textarea value={this.state.difficulty} name="difficulty" onChange={this.handleChange} class="form-control" type="text" id="exampleTextarea" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </fieldset>
        </form>
      );
    }
}
  
  
 
 