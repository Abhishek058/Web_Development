import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        {
          Rollno: 58,
          name: "Abhishek",
        },
        {
          Rollno: 34,
          name: "Abhay",
        },
        {
          Rollno: 57,
          name: "Abhiraj",
        },
        {
          Rollno: 70,
          name: "Abhishek",
        },
        
        {
          Rollno: 2,
          name: "Aaditya",
        },
      ],
    };
  }
  render() {
    return <div className="bg-green-500">
      <div class></div>
    </div>;
  }
}
