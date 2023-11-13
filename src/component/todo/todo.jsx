import React, { Component } from "react";
import "./todo.css";

export default class Todo extends Component {
  state={
    task:"",
}
handleKey=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}

Submit=(e)=>{
  e.preventDefault()
  const{task}=this.state
  fetch("http://localhost:3001/React/addtask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      task
      
    }),
  })
    .then((res) => {
      if(res.status==201)
      {
        alert("Data Added")
      }
      else
      {
        alert("data not added")
      }
    })
    .catch((error)=>{alert("server not connected")})
}




  render() {
    return (
      <div>
        <div className="container">
          <div className="textfield">
            <input type="text" placeholder="   Task" onChange={this.handleKey} name="task"/>
            <div><button onClick={this.Submit}>ADD</button></div>
          </div>
          <ul type="none">
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul> 
        </div>
      </div>
    );
  }
}
