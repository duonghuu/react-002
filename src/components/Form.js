import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task_name: '',
      task_level: 0
    };
    this.closeForm = this.closeForm.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
  }
  closeForm() {
    this.props.onCloseForm()
  }
  handleChange(event) {
    this.setState({task_name: event.target.value});
  }
  handleLevelChange(event) {
    this.setState({task_level: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let item = {
      name: this.state.task_name,
      level: this.state.task_level,
    }
    this.props.onAddTask(item);
  }
  render() {
    return (
        <div className="row">
          <div className="col-md-offset-7 col-md-5">
            <form onSubmit={this.handleSubmit} action="true" method="POST" className="form-inline">
              <div className="form-group">
                <label className="sr-only" htmlFor="true">label</label>
                <input type="text" value={this.state.task_name} onChange={this.handleChange} className="form-control" placeholder="Task Name"  />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="true">label</label>
                <select name="task_level" id="inputDs" className="form-control" required="required" value={this.state.task_level} onChange={this.handleLevelChange} >
                  <option value={0}>Small</option>
                  <option value={1}>Medium</option>
                  <option value={2}>High</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="button" onClick={this.closeForm} className="btn btn-default">Cancel</button>
            </form>
          </div>
        </div>

    );
  }
}

export default Form;
