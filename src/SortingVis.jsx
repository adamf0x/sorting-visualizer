import React from "react";
import "./App.css";
import "./SortingVis.css";
import { bubbleSortAnimations } from "./GetBubbleSortAnimations";

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
    for (let i = 0; i < 20; i++) {
      arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    this.setState({ array: arr });
  }

  bubbleSort() {
    /*
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
      }, i*75)
      
      }
    }, i*75) 
    }
    */
    const animations = bubbleSortAnimations(this.state.array);
    const elems = document.getElementsByClassName("bar");
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        var bar1 = elems[animations[i][0]];
        var bar2 = elems[animations[i][1]];
        var temp = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = temp;
      }, i*30);
    }
    this.setState(this.array)
  }

  render() {
    const { array } = this.state;
    return (
      <div>
        <div className="buttons">
          <button className="action" onClick={() => this.generateArray()}>
            reset array
          </button>
          <button className="action" onClick={() => this.bubbleSort()}>
            visualize sorting
          </button>
        </div>
        <div className="container">
          {array.map((value, index) => (
            <div
              className="bar"
              key={index}
              id={index}
              style={{ height: `${value}px` }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
