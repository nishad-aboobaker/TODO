import React, { Component } from "react";
import "./todo.css";
import axios, { Axios } from "axios";

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
  const{task}=this.state
  const data=axios.post("http://localhost:3001/React/addtask",{task})

    data.then((res) => {
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
    e.target[0].value=""
}




  render() {
    return (
      <div>
        <div className="container">
          <div className="textfield">
            <form action="" onSubmit={this.Submit}>
            <input type="text" placeholder="   Task" onChange={this.handleKey} name="task"/>
            </form>
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
