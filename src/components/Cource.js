import React, { Component } from "react";
import Lesson from './Lesson';
class Cource extends Component {
  constructor(props) {
    super(props)
    this.handleClick3 = this.handleClick3.bind(this)
    this.registerCource = this.registerCource.bind(this)
    this.handleShowOutline = this.handleShowOutline.bind(this)
    this.state = {
      isShowOutline: false
    };
  }
  handleShowOutline(){
    this.setState({
      isShowOutline: !this.state.isShowOutline
    });
  }
  registerCource(){
    console.dir(this.refs.username.value)
  }
  handleClick1(){
    alert('View 1')
  }
  handleClick2(content){
    alert(content)
  }
  handleClick3(){
    alert(this.props.name)
  }
  showFreeView(){
    if (this.props.free) {
      return (
        <div className="card-footer">
          <div className="btn-group">
            <button onClick={this.handleClick1} type="button" className="btn btn-warning ">View 1</button>
            <button onClick={() => this.handleClick2("View 2")} type="button" className="btn btn-danger ">View 2</button>
            <button onClick={this.handleClick3} type="button" className="btn btn-success ">View 3</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card-footer">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button onClick={this.registerCource} type="button" className="btn btn-warning ">Register</button>
            </div>
            <input type="text" className="form-control" ref="username" placeholder="Username" />
          </div>
        </div>
      );
    }
  }
  render() {
    let elmOutline = null
    if (this.state.isShowOutline) {
      elmOutline =  <ul className="list-group list-group-flush">
                      <Lesson />
                      <Lesson />
                      <Lesson />
                      <Lesson />
                    </ul>
    }
    return (
      <div className="col-md-4">
        <div className="card bg-primary">
          <div className="card-header text-white">{this.props.name}</div>
          <div className="card-body">
            <p className=" text-warning">{this.props.time}</p>
            <p className=" text-white">{this.props.children}</p>
            <button onClick={this.handleShowOutline} type="button" className="btn btn-success">Show Outline</button>
            {elmOutline}
          </div>
          {this.showFreeView()}
        </div>
      </div>
    );
  }
}

export default Cource;
