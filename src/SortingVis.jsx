import React from "react";
import "./App.css";
import "./SortingVis.css";
import {
  bubbleSortAnimations,
  getQuicksortAnimations,
  getMergeSortAnimations,
} from "./GetSortAnimations";
import { Slider } from "@material-ui/core";
import { Helmet } from "react-helmet";

var primary = "pink";
var secondary = "red";
var tertiary = "lime"

var numBars = 100;
var barWidth = Math.floor(1000 * (1 / numBars));
var barColor = "transparent";
var sliderDisabled = false;


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
    var min = 20;
    var arr = [];
    for (let i = 0; i < numBars; i++) {
      arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    this.setState({ array: arr });
  }
  setColour() {
    const elems = document.getElementsByClassName("bar");
    const buttons = document.getElementsByClassName("action");
    const dropdown = document.getElementById("Algs");
    dropdown.style.backgroundColor = primary;
    for (var i of elems) {
      i.style.backgroundColor = primary;
    }
    for(var j of buttons){
      j.style.backgroundColor = primary;
    }
  }
  setColorScheme(color1, color2, color3) {
    primary = color1;
    secondary = color2;
    tertiary = color3;
  }

  disableComponents(time) {
    const buttons = document.getElementsByClassName("action");
    const dropdown = document.getElementById("Algs");

    sliderDisabled = true;
    dropdown.disabled = true;
    for (var i of buttons) {
      i.disabled = true;
    }
    setTimeout(() => {
      dropdown.disabled = false;
      sliderDisabled = false;
      for (var i of buttons) {
        i.disabled = false;
      }
    }, time);
  }

  bubbleSort() {
    var delay = Math.floor(1000 * (1 / (numBars * 2)));
    const animations = bubbleSortAnimations(this.state.array);
    this.disableComponents(animations.length * delay);
    for (let i = 0; i < animations.length; i++) {
      const elems = document.getElementsByClassName("bar");
      //if the loop is not on a element that signifies a swap
      if (i % 3 !== 2) {
        const bar1 = elems[animations[i][0]];
        const bar2 = elems[animations[i][1]];
        //setting the elements to alternate colour
        if (i % 3 === 0) {
          setTimeout(() => {
            bar1.style.backgroundColor = secondary;
            bar2.style.backgroundColor = secondary;
          }, i * delay);
        } else {
          //return the elements that were altered to the original colour
          setTimeout(() => {
            bar1.style.backgroundColor = primary;
            bar2.style.backgroundColor = primary;
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
            bar1.textContent = `${bar2.style.height}`.replace("px", "");
            bar2.style.height = `${temp}`;
            bar2.textContent = `${temp}`.replace("px", "");
          }, i * delay);
        }
      }
      if (i === animations.length - 1) {
        setTimeout(() => {
          for (let j = 0; j < elems.length; j++) {
            setTimeout(() => {
              elems[j].style.backgroundColor = tertiary;
            }, j * delay);
          }
        }, delay * animations.length);
      }
    }
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
    this.disableComponents(animations.length * qsdelay);
    //similar procedure as that of bubble sort
    for (let i = 0; i < animations.length; i++) {
      const elems = document.getElementsByClassName("bar");
      if (animations[i].length === 2) {
        comparecount++;
        if (comparecount % 2 !== 0) {
          setTimeout(() => {
            var bar1 = elems[animations[i][0]];
            var bar2 = elems[animations[i][1]];
            bar1.style.backgroundColor = secondary;
            bar2.style.backgroundColor = secondary;
          }, i * qsdelay);
        } else {
          setTimeout(() => {
            var bar1 = elems[animations[i][0]];
            var bar2 = elems[animations[i][1]];
            bar1.style.backgroundColor = primary;
            bar2.style.backgroundColor = primary;
          }, i * qsdelay);
        }
      }
      if (animations[i].length === 3) {
        setTimeout(() => {
          var bar1 = elems[animations[i][0]];
          var bar2 = elems[animations[i][1]];
          var temp = bar1.style.height;
          bar1.style.height = `${bar2.style.height}`;
          bar1.textContent = `${bar2.style.height}`.replace("px", "");
          bar2.style.height = `${temp}`;
          bar2.textContent = `${temp}`.replace("px", "");
        }, i * qsdelay);
      }
      if (i === animations.length - 1) {
        setTimeout(() => {
          for (let j = 0; j < elems.length; j++) {
            setTimeout(() => {
              elems[j].style.backgroundColor = tertiary;
            }, j * qsdelay);
          }
        }, qsdelay * animations.length);
      }
    }
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    var mergedelay = Math.floor(1000 * (1 / (numBars * 2)));
    var compareCount = 0;
    this.disableComponents(animations.length * mergedelay);
    for (let i = 0; i < animations.length; i++) {
      const elems = document.getElementsByClassName("bar");
      if (animations.length === 0) {
        continue;
      }
      if (animations[i].length !== 3) {
        compareCount++;
        if (compareCount % 2 !== 0) {
          setTimeout(() => {
            var bar1 = elems[animations[i][0]];
            var bar2 = elems[animations[i][1]];
            bar1.style.backgroundColor = secondary;
            bar2.style.backgroundColor = secondary;
          }, i * mergedelay);
        } else {
          setTimeout(() => {
            var bar1 = elems[animations[i][0]];
            var bar2 = elems[animations[i][1]];
            bar1.style.backgroundColor = primary;
            bar2.style.backgroundColor = primary;
          }, i * mergedelay);
        }
      } else {
        setTimeout(() => {
          var barToOverwrite = elems[animations[i][0]];
          var height = animations[i][1];
          barToOverwrite.style.height = `${height}px`;
          barToOverwrite.textContent = `${height}`.replace("px", "");
        }, i * mergedelay);
      }
      if (i === animations.length - 1) {
        setTimeout(() => {
          for (let j = 0; j < elems.length; j++) {
            setTimeout(() => {
              elems[j].style.backgroundColor = tertiary;
            }, j * mergedelay);
          }
        }, mergedelay * animations.length);
      }
    }
  }

  render() {
    const title = "Sorting Visualizer";
    const desc = "A sorting visualizer created using React";
    const { array } = this.state;
    return (
      <div>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Helmet>
        <div className="colorButtons">
          <button
            className="colorButton"
            style={{ backgroundColor: `pink` }}
            onClick={() => {
              this.setColorScheme("pink", "red", "lime");
              this.setColour();
            }}
          >
            color scheme 1
          </button>
          <button
            className="colorButton"
            style={{ backgroundColor: "#83BDFF" }}
            onClick={() => {
              this.setColorScheme("#83BDFF", "#7C00FF", "#CBBAED");
              this.setColour();
            }}
          >
            color scheme 2
          </button>
          <button
            className="colorButton"
            style={{ backgroundColor: "#FF5F00" }}
            onClick={() => {
              this.setColorScheme("#FF5F00", "black", "#00A6ED");
              this.setColour();
            }}
          >
            color scheme 3
          </button>
        </div>
        <div className="buttons">
          <button
            className="action"
            onClick={() => {
              this.setColour();
              this.generateArray(numBars);
            }}
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
                  this.setColour();
                  this.bubbleSort();
                  break;
                case "Quick Sort":
                  this.setColour();
                  this.quickSort();
                  break;
                case "Merge Sort":
                  this.setColour();
                  this.mergeSort();
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
              min={3}
              step={1}
              max={450}
              disabled={sliderDisabled}
              onChange={(e, num) => {
                if (sliderDisabled === true) {
                  return;
                }
                numBars = num;
                if (num <= 30) {
                  barColor = "black";
                } else {
                  barColor = "transparent";
                }
                if (numBars < 20) {
                  barWidth = 70;
                } else {
                  barWidth = Math.floor(1000 * (1 / numBars));
                }
                this.generateArray(numBars);
                this.setColour();
              }}
              defaultValue={100}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            ></Slider>
          </div>
        </div>
        <div className="selector">
          <p>Choose an Algorithm:</p>
          <select
            id="Algs"
            onChange={() => {
              this.generateArray(numBars);
              this.setColour();
            }}
          >
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
              style={{
                height: `${value}px`,
                width: `${barWidth}px`,
                color: `${barColor}`,
                backgroundColor: `${primary}`,
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
