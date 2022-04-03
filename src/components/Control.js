import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";
class Control extends Component {
  constructor(props) {
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.onSearchGoControl = this.onSearchGoControl.bind(this);
  }
  handleAddTask(){
    this.props.onHandleToggleForm();
  }
  onSearchGoControl(value){
    this.props.onSearchGoApp(value);
  }
  render() {
    let {orderBy,orderDir,isShowForm}  = this.props;
    let elmButton = <button type="button" onClick={this.handleAddTask} className="btn btn-info btn-block">Add Task</button>
    if (isShowForm) {
      elmButton = <button type="button" onClick={this.handleAddTask} className="btn btn-success btn-block">Close Form</button>
    }
    return (
        <div className="row">
          {/* SEARCH : START */}
          <Search onSearchGoControl={this.onSearchGoControl} />
          {/* SEARCH : END */}

          {/* SORT : START */}
          <Sort 
          orderBy={orderBy}  
          orderDir={orderDir}  
          onHandleSort={this.props.onHandleSort}  
          />
          {/* SORT : END */}

          {/* ADD : START */}
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            {elmButton}
          </div>
          {/* ADD : END */}
        </div>
    );
  }
}

export default Control;
