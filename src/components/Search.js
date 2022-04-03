import React, { Component } from "react";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strSearch: ''
    };
    this.handelChange = this.handelChange.bind(this)
    this.handelSearch = this.handelSearch.bind(this)
    this.handelClear = this.handelClear.bind(this)
  }
  handelChange(event) {
    this.setState({
      strSearch: event.target.value
    });
  }
  handelClear() {
    this.setState({
      strSearch: ''
    });
    this.props.onSearchGoControl('')
  }
  handelSearch() {
    this.props.onSearchGoControl(this.state.strSearch)
  }
  render() {
    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="input-group">
            <input value={this.state.strSearch} onChange={this.handelChange} type="text" className="form-control" placeholder="Search for..." />
            <span className="input-group-btn">
              <button onClick={this.handelSearch} className="btn btn-info" type="button">Go!</button>
              <button onClick={this.handelClear} className="btn btn-warning" type="button">Clear</button>
            </span>
          </div>
        </div>
    );
  }
}

export default Search;
