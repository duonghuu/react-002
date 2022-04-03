import React, { Component } from "react";
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import tasks from "./mocks/tasks";
import { filter, includes, orderBy as funcOrderBy, remove } from 'lodash';
const { v4: uuidv4 } = require('uuid');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "items": tasks,
      "isShowForm": false,
      strSearch: '',
      orderBy: 'name',
      orderDir: 'asc',
    };
    this.handleToggleForm = this.handleToggleForm.bind(this)
    this.handleCloseForm = this.handleCloseForm.bind(this)
    this.handleSearchGoApp = this.handleSearchGoApp.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)
  }
  handleToggleForm(){
    this.setState({
      "isShowForm": !this.state.isShowForm,
    });
  }
  handleCloseForm(){
    this.setState({
      "isShowForm": false
    });
  }
  handleSearchGoApp(value){
    this.setState({
      strSearch: value
    });
    
  }
  handleSort(orderBy, orderDir){
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir,
    });
    
  }
  handleDelete(id){
    let items = this.state.items;
    let removeItem = remove(items, (item) => {
      return item.id == id;
    });
    this.setState({
      "items": items,
    });
    
  }
  handleAddTask(item){
    console.log(item);
    let items = this.state.items;
    let objInfo = {
      id: uuidv4(),
      name: item.name,
      level: +item.level,
    }
    items.push(objInfo);
    this.setState({
      "items": items,
    });
    
  }
  render() {
    let oRiGinItems = [...this.state.items];
    let items = [];
    let {strSearch,orderBy,orderDir,isShowForm}  = this.state;
    /*SEARCH*/
    if (strSearch !== '') {
      items = filter(oRiGinItems, (item => {
        if (includes(item.name.toLowerCase(), strSearch.toLowerCase()) ){
          return item;
        }
      }));
    } else {
      items = oRiGinItems
    }
    /*SORT*/
    items = funcOrderBy(items, [orderBy], [orderDir]);
    let elmForm = null;
    if (isShowForm) {
      elmForm = <Form 
                  onAddTask={this.handleAddTask}
                  onCloseForm={this.handleCloseForm} />;
    }
    return (
      <div >
        {/* TITLE : START */}
        <Title />
        {/* TITLE : END */}

        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control 
          isShowForm={isShowForm}  
          onHandleSort={this.handleSort}
          onHandleToggleForm={this.handleToggleForm}
          onSearchGoApp={this.handleSearchGoApp} 
          orderBy={orderBy} 
          orderDir={orderDir} 
         />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}

        {/* FORM : START */}
        
        {elmForm}
        {/* FORM : END */}

        {/* LIST : START 

        */}
        <List onHandleDelete={this.handleDelete} items={items} />
        {/* LIST : END */}
      </div>
    );
  }
}

export default App;
