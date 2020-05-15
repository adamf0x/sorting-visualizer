import React from "react";
import "./App.css";
import "./SortingVis.css";
import { bubbleSortAnimations } from "./GetBubbleSortAnimations";
import { Slider } from "@material-ui/core";

var numBars = 100;
var barWidth = Math.floor(1000 * (1 / numBars));

export class SortingVis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.generateArray(numBars);
  }
  generateArray(numBars) {
    var max = numBars * 3;
    var min = 5;
    var arr = [];
    for (let i = 0; i < numBars; i++) {
      arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    this.setState({ array: arr });
  }

  bubbleSort() {
    var delay = Math.floor(1000 * (1 / (numBars + 10)));
    const animations = bubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const elems = document.getElementsByClassName("bar");
      //if the loop is not on a element that signifies a swap
      if (i % 3 !== 2) {
        const bar1 = elems[animations[i][0]];
        const bar2 = elems[animations[i][1]];
        //setting the elements to alternate colour
        if (i % 3 === 0) {
          setTimeout(() => {
            bar1.style.backgroundColor = "red";
            bar2.style.backgroundColor = "red";
          }, i * delay);
        } else {
          //return the elements that were altered to the original colour
          setTimeout(() => {
            bar1.style.backgroundColor = "turquoise";
            bar2.style.backgroundColor = "turquoise";
          }, i * delay);
        }
        //if the loop is on an element that signifies a swap of two bars in the array, swap their heights
      } else {
        if (animations[i].length !== 0) {
          setTimeout(() => {
            var bar1 = elems[animations[i][0]];
            var bar2 = elems[animations[i][1]];
            var temp = bar1.style.height;
            bar1.style.height = `${bar2.style.height}`;
            bar2.style.height = `${temp}`;
          }, i * delay);
        }
      }
    }
  }

  render() {
    const { array } = this.state;
    return (
      <div>
        <div className="buttons">
          <button className="action" onClick={() => this.generateArray(numBars)}>
            generate array
          </button>
          <button className="action" onClick={() => this.bubbleSort()}>
            visualize sorting
          </button>
          <div className="slider">
            <div className = 'sliderText'>Number of array elements/sorting speed:</div>
            <Slider
              min={0}
              step={1}
              max={300}
              onChange = {(e, num)=>{numBars = num; barWidth = Math.floor(1000 * (1 / numBars)); this.generateArray(numBars)}}
              defaultValue={100}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            ></Slider>
          </div>
        </div>
        <div className="container">
          {array.map((value, index) => (
            <div
              className="bar"
              key={index}
              style={{ height: `${value}px`, width: `${barWidth}px` }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
