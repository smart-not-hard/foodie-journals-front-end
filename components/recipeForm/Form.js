// class Form extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//           titleValue: '',
//           descriptionValue: '',
//           stepsValue: ''
//         };
//        this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
//      handleChange(event) {
//       this.setState({
//             userValue: event.target.value,
//             descriptionValue: event.target.value,
//             stepsValue: event.target.value
//         });
//     }
//      handleSubmit(event) {
//       alert('Account Created');
//       event.preventDefault();
//     }
//      render() {
//       return (
   
//         <form onSubmit={this.handleSubmit}>
//             <fieldset>
//             <h2>Create an Account</h2>
//                 <div class="form-group row">
//                     <label for="exampleInputEmail1" >Email address: </label>
//                     <input value={this.state.value} onChange={this.handleChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//                 </div>
//                 <div class="form-group">
//                     <label for="exampleInputUsername">Username: </label>
//                     <input value={this.state.value} onChange={this.handleChange} type="username" class="form-control" id="exampleInputUsername" aria-describedby="emailHelp" placeholder="Enter username"/>
//                 </div>
//                 <div class="form-group">
//                     <label for="exampleInputPassword1">Password</label>
//                     <input value={this.state.value} onChange={this.handleChange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
//                 </div>
//                 <button type="submit" class="btn btn-primary">Submit</button>
//             </fieldset>
//         </form>
//       );
//     }
//  }
  
 export default class PostForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          titleValue: '',
          descriptionValue: '',
          stepsValue: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     handleChange(event) {
         const newName = event.target.value
      this.setState({
            titleValue: event.target.titleValue,
            descriptionValue: event.target.descriptionValue,
            stepsValue: event.target.stepsValue
        });
    }
     handleSubmit(event) {
      alert('Recipe Submited');
      event.preventDefault();
      this.props.onRecipeCreate(this.state);
      this.setState({
            titleValue: '',
            descriptionValue: '',
            stepsValue: '', 
        });
    }

     render() {
      return (
   
        <form onSubmit={this.handleSubmit}>
            <fieldset>
            <h2>Post A Recipe</h2>
                <div className="form-group row">
                    <label for="exampleInputEmail1" >Title: </label>
                    <input value={this.state.titleValue} onChange={this.handleChange} type="text" class="form-control"  placeholder="Enter Recipe"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputUsername">Description: </label>
                    <input value={this.state.descriptionValue} onChange={this.handleChange} type="text" class="form-control" placeholder="Description"/>
                </div>
                <div className="form-group">
                    <label for="exampleTextarea">Steps: </label>
                    <textarea value={this.state.stepsValue} class="form-control" type="text" id="exampleTextarea" rows="3"></textarea>
                </div>
                {/* <div className="form-group">
                    <label for="exampleInputFile">Pictures</label>
                    <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                </div> */}
                <button type="submit" class="btn btn-primary">Submit</button>
            </fieldset>
        </form>
      );
    }
 }
  
  
 
 