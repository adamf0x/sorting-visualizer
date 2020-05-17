import React from "react";
import "./App.css";
import "./SortingVis.css";
import {
  bubbleSortAnimations,
  getQuicksortAnimations,
} from "./GetSortAnimations";
import { Slider } from "@material-ui/core";
import { Helmet } from "react-helmet";

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
    var max = 0;
    if (numBars <= 50) {
      max = 100;
    } else {
      max = numBars * 1.5;
    }
    var min = 5;
    var arr = [];
    for (let i = 0; i < numBars; i++) {
      arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    this.setState({ array: arr });
  }

  bubbleSort() {
    var delay = Math.floor(1000 * (1 / (numBars * 2)));
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
  isInteger(argument) {
    return argument === ~~argument;
  }

  quickSort() {
    //initialize a comparisson count to be used to know if the comparisson array in the animations array indicated a swap to the alternate colour or back to the original colour
    var comparecount = 0;
    var qsdelay = Math.floor(1000 * (1 / (numBars * 2)));
    //get the list of quick sort animations
    const animations = getQuicksortAnimations(
      this.state.array,
      0,
      this.state.array.length - 1
    );
    //similar procedure as that of bubble sort
    for (let i = 0; i < animations.length; i++) {
      const elems = document.getElementsByClassName("bar");
      if (animations[i].length === 2) {
        comparecount++;
        if (comparecount % 2 !== 0) {
          setTimeout(() => {
            var bar1 = elems[animations[i][0]];
            var bar2 = elems[animations[i][1]];
            bar1.style.backgroundColor = "red";
            bar2.style.backgroundColor = "red";
          }, i * qsdelay);
        } else {
          setTimeout(() => {
            var bar1 = elems[animations[i][0]];
            var bar2 = elems[animations[i][1]];
            bar1.style.backgroundColor = "turquoise";
            bar2.style.backgroundColor = "turquoise";
          }, i * qsdelay);
        }
      }
      if (animations[i].length === 3) {
        setTimeout(() => {
          var bar1 = elems[animations[i][0]];
          var bar2 = elems[animations[i][1]];
          var temp = bar1.style.height;
          bar1.style.height = bar2.style.height;
          bar2.style.height = temp;
        }, i * qsdelay);
      }
    }
  }

  render() {
    const title = "Sorting Visualizer";
    const { array } = this.state;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div className="buttons">
          <button
            className="action"
            onClick={() => this.generateArray(numBars)}
          >
            generate array
          </button>
          <button
            className="action"
            onClick={() => {
              var e = document.getElementById("Algs");
              var val = e.options[e.selectedIndex].value;
              switch (val) {
                case "Bubble Sort":
                  this.bubbleSort();
                  break;
                case "Quick Sort":
                  this.quickSort();
                  break;
                default:
                  alert("select a different algorithm");
                  break;
              }
            }}
          >
            visualize sorting
          </button>
          <div className="slider">
            <div className="sliderText">
              Number of array elements/sorting speed:
            </div>
            <Slider
              min={2}
              step={1}
              max={450}
              onChange={(e, num) => {
                numBars = num;
                if (numBars < 20) {
                  barWidth = 70;
                } else {
                  barWidth = Math.floor(1000 * (1 / numBars));
                }
                this.generateArray(numBars);
              }}
              defaultValue={100}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            ></Slider>
          </div>
        </div>
        <div className="selector">
          <p>Choose an Algorithm:</p>
          <select id="Algs">
            <option value="Bubble Sort">Bubble Sort</option>
            <option value="Quick Sort">Quick Sort</option>
            <option value="Merge Sort">Merge Sort</option>
          </select>
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
