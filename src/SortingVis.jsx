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
    var max = 500;
    var min = 10;
    var arr = [];
    for (let i = 0; i < 200; i++) {
      arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    this.setState({ array: arr });
  }

  bubbleSort() {
    const animations = bubbleSortAnimations(this.state.array);
    const elems = document.getElementsByClassName("bar");
    /*
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        var swapAnimation = animations[i].swap;
        var bar1 = elems[animations[i].compare[0]]
        var bar2 = elems[animations[i].compare[1]]
        if(swapAnimation == true){
          var temp = bar1.style.height;
          bar1.style.height = bar2.style.height;
          bar2.style.height = temp;
        }else{
          bar1.style.backgroundColor = "red"
          bar2.style.backgroundColor = "red"
        }
      }, i*30);
    }
    */
    for (let i = 0; i < animations.length; i++) {
      if (animations[i].swap === true) {
        setTimeout(() => {
          var bar1 = elems[animations[i].compare[0]];
          var bar2 = elems[animations[i].compare[1]];
          var temp = bar1.style.height;
          bar1.style.height = bar2.style.height;
          bar2.style.height = temp;
          bar1.style.backgroundColor = "red";
          bar2.style.backgroundColor = "red";
        }, i * 2);
        setTimeout(()=>{
          var bar1 = elems[animations[i].compare[0]];
          var bar2 = elems[animations[i].compare[1]];
          bar1.style.backgroundColor = "turquoise";
          bar2.style.backgroundColor = "turquoise";
        }, i*2)
      }
    }

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
