import React, { Component } from "react";
import $ from 'jquery';
class LifeCycle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "LifeCycle title"
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    console.log('constructor');
  }
  handleChangeTitle(){
    this.setState({
      title: "LifeCycle title handleChangeTitle"
    });
    
  }
  render() {
    console.log('render');
    return (
      <div className="col mt-5">
        <div className="card ">
          <div className="card-header">{this.state.title}</div>
          <div className="card-body">
            <button type="button" onClick={this.handleChangeTitle} className="btn btn-primary">Change Title</button>
          </div>
        </div>
      </div>
    );

  }
  componentDidMount(){
    $('.card-header').addClass('bg-danger');
    console.log('componentDidMount'); 
  }
  componentDidUpdate(){
    $('.card-header').removeClass('bg-danger');
    $('.card-header').addClass('bg-info');
    console.log('componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

}

export default LifeCycle;
