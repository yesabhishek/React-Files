import React, { Component } from "react";
import "./Body.css";
import { stateData } from "../data/Data";
/* import Notes from "../notes/Notes"
import Card from "../contact-cards/Card"
import Post from '../post/Post'
 */

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      note: "note",
    };
  }

  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const name = "Abhishek";
    const styles = {
      fontSize: 30,
    };
    if (hours < 12) {
      timeOfDay = "morning";
      styles.backgroundColor = "#89FCB6";
      styles.color = "#FFFFFF";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Afternoon";
      styles.backgroundColor = "#FF6600";
      styles.color = "#FFFFFF";
    } else {
      timeOfDay = "Night";
      styles.color = "#4c4c4c";
      styles.backgroundColor = "#191919";
    }

    return (
      <div style={styles}>
        <div className="container-table100">
          <div className="wrap-table100">
            <div className="table">
              {stateData.map((data, key) => {
                return (
                  <div className="row">
                    <div
                      className="cell"
                      data-title="State/Union territory"
                      key={key}
                    >
                      {data.state}
                    </div>
                    <div className="cell" data-title="Men">
                      0
                    </div>
                    <div className="cell" data-title="Women">
                      0
                    </div>
                    <div className="cell" data-title="Children">
                      0
                    </div>
                    <div className="cell" data-title="Last Updated">
                      {date.getDate() +
                        "/" +
                        date.getMonth() +
                        "/" +
                        date.getFullYear()}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
