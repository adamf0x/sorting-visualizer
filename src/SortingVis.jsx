import React from "react";
import "./App.css";
import "./SortingVis.css";

export class SortingVis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.generateArray();
  }
  generateArray() {
    var max = 100;
    var min = 10;
    var arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    this.setState({ array: arr });
  }

  bubbleSort() {
    let arr = this.state.array;
    for (let i = 1; i < arr.length; i++) {
      setTimeout(()=>{
      for (let j = 0; j < i; j++) {
        setTimeout(()=>{
        if (arr[i] < arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          this.setState({ array: arr });
        }
      }, i*50)
      
      }
    }, i*50) 
    }
  }

  render() {
    const { array } = this.state;
    return (
      <div className="container">
        <div className="buttons">
          <button className="action" onClick={() => this.generateArray()}>
            reset array
          </button>
          <button className="action" onClick={() => this.bubbleSort()}>
            visualize sorting
          </button>
        </div>
        {array.map((value, index) => (
          <div
            className="bar"
            key={index}
            id = {index}
            style={{height: `${value}px`, width: `${value}px`}}
          >
            {value}
          </div>
        ))}
      </div>
    );
  }
}
