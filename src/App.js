import React, { Component } from "react";
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import tasks from "./mocks/tasks";
import { filter, includes } from 'lodash';
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
  render() {
    let oRiGinItems = [...this.state.items];
    let items = [];
    let {strSearch,orderBy,orderDir,isShowForm}  = this.state;
    if (strSearch !== '') {
      items = filter(oRiGinItems, (item => {
        if (includes(item.name, strSearch) ){
          return item;
        }
      }));
    } else {
      items = oRiGinItems
    }
    let elmForm = null;
    if (isShowForm) {
      elmForm = <Form onCloseForm={this.handleCloseForm} />;
    }
    return (
      <div >
        {/* TITLE : START */}
        <Title />
        {/* TITLE : END */}

        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control isShowForm={this.state.isShowForm}  onHandleToggleForm={this.handleToggleForm}
        onSearchGoApp={this.handleSearchGoApp} 
         />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}

        {/* FORM : START */}
        
        {elmForm}
        {/* FORM : END */}

        {/* LIST : START 

        */}
        <List items={items} />
        {/* LIST : END */}
      </div>
    );
  }
}

export default App;
