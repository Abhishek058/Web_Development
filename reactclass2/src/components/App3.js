import React, { Component } from "react";

export default class App3 extends Component {
  constructor() {
    super();
    this.state = {
      student: [
        { name: "vikas", marks: 5 },
        { name: "abhishek", marks: 2 },
        { name: "abhay", marks: 9 },
        { name: "abhiraj", marks: 4 },
      ],
    };
  }
  increment = (name) => {
    let ppl = this.state.student.map((s) => {
      if (s.name == name) {
        s.marks++;
      }
      return s;
    });
    this.setState({ student: ppl });
  };
  render() {
    return (
      <div className="app3">
        {this.state.student.map((student) => (
          <Student
            name={student.name}
            marks={student.marks}
            increment={this.increment}
          />
        ))}
      </div>
    );
  }
}
