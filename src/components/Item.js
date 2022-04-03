import React, { Component } from "react";
class Item extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
      this.deleteTask = this.deleteTask.bind(this)
  }
  deleteTask(id) {
    this.props.onHandleDelete(id)
  }
  showElementLevel(level) {
    let elmLevel = <span className="label label-default">Small</span>;
    if (level === 2) {
      elmLevel = <span className="label label-danger">High</span>;
    } else if (level === 1) {
      elmLevel = <span className="label label-info">Medium</span>;
    }
    return elmLevel;
  }
  render() {
    let {item} = this.props;
    let index = this.props.index;
    
    return (
        <tr>
          <td className="text-center">{index + 1}</td>
          <td>{item.name}</td>
          <td className="text-center">{this.showElementLevel(item.level)}</td>
          <td>
            <button type="button" className="btn btn-warning">Edit</button>
            <button type="button" onClick={()=>this.deleteTask(item.id)} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default Item;
