import React, { Component } from "react";
import Stucard from "./Stucard";
import "./index.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      student: [
        { name: "Abhay", rNo: "0034", st1: 33, st2: 34, totM: 0 },
        { name: "Abhishek T.", rNo: "0070", st1: 32, st2: 40, totM: 0 },
        { name: "Abhishek M.", rNo: "0058", st1: 28, st2: 37, totM: 0 },
        { name: "Abhiraj", rNo: "0057", st1: 29, st2: 39, totM: 0 },
        { name: "Vaibhav", rNo: "0437", st1: 39, st2: 23, totM: 0 },
      ],
      totalM: 0,
    };
  }
  total = (rNo) => {
    let update = this.state.student.map((stu) => {
      if (rNo === stu.rNo) {
        stu.totM = stu.st1 + stu.st2;
      }
      return stu;
    });
    this.setState({ student: update });
  };
  render() {
    return (
      <div className="container flex-wrap m-auto h-fit box-border py-5 bg-green-300 flex flex-row items-center justify-center">
        {this.state.student.map((ob) => (
          <Stucard
            name={ob.name}
            rNo={ob.rNo}
            m1={ob.st1}
            m2={ob.st2}
            totM={ob.totM}
            total={this.total}
          />
        ))}
      </div>
    );
  }
}
