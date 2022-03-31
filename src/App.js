import React, { Component } from "react";
import Cource from './components/Cource';
import LifeCycle from './components/LifeCycle';
class App extends Component {
  
  render() {
    const items = [
      {
        name: "Lavarel",
        time: "30h",
        free: false,
        desc: "Lavarel is easy",
      },
      {
        name: "PHP",
        time: "25h",
        free: true,
        desc: "PHP is easy",
      },
      {
        name: "React js",
        time: "35h",
        free: true,
        desc: "React js is easy",
      },
    ];
    let elmCources = items.map( (item,index) => 
      <Cource key={index} name={item.name} time={item.time} free={item.free}>{item.desc}</Cource>
    );
    elmCources = null;
    return (
      <div className="row">
        {elmCources}
        <hr />
        <LifeCycle />
      </div>
    );
  }
}

export default App;
