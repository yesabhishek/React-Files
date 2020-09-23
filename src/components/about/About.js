import React, { Component } from "react";
import "./About.css";
import emoji from "react-easy-emoji";

class About extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="about-section">
        <h1 align="left">
          About Section <span className="wave-emoji">{emoji("👋🏻")}</span>
        </h1>
        <br></br>
        <p>
          <span class="green-highlight">
            So write with a combination of short, medium, and long sentences.
            Create a sound that pleases the reader's ear.{" "}
          </span>
          <span class="red-highlight">Don't just write words. </span>
          <span class="yellow-highlight">Write music. </span>
        </p>
        <p>
          Aute aliquip dolor anim do qui nisi fugiat amet duis consequat cillum
          mollit. Aliquip aliquip ipsum deserunt sunt tempor irure excepteur
          commodo cillum aliquip fugiat. Sit labore do occaecat aliqua id
          consequat cupidatat mollit fugiat aliquip eiusmod. Magna dolore
          reprehenderit exercitation nisi mollit. Fugiat eu ex dolore non mollit
          labore nostrud cillum cupidatat elit. Quis veniam ad id consequat. Eu
          aute nisi proident sunt pariatur adipisicing esse reprehenderit est
          esse quis consectetur aliqua. Fugiat occaecat velit nostrud nisi
          cupidatat quis enim nostrud adipisicing veniam eiusmod duis aliquip.
          Irure proident qui consectetur ut ea in et deserunt laborum ex.
          Officia consectetur tempor eiusmod dolore proident culpa do ullamco
          aute. Esse incididunt anim aliquip quis proident fugiat aliquip id
          dolor laborum adipisicing id elit incididunt. Sunt Lorem magna Lorem
          dolore incididunt non in elit id non eiusmod anim eiusmod irure. Ipsum
          ex duis irure excepteur qui ullamco labore nostrud velit sit tempor
          dolore ut. Non eiusmod irure proident quis sunt laborum proident. Sit
          ut ad elit quis cillum eiusmod commodo incididunt dolore enim ex
          tempor dolor officia. Non consequat elit eu exercitation cillum
          excepteur nisi in laboris proident non Lorem. Veniam amet duis
          proident incididunt sunt fugiat cupidatat ullamco sit eu velit eu. In
          eiusmod eu consectetur incididunt culpa veniam aliqua incididunt
          commodo esse laborum do. Culpa est ut id veniam ut ex dolore non non
          ullamco velit. Minim consectetur elit tempor ea. Nostrud ex
          adipisicing sunt aliqua deserunt sint commodo ullamco Lorem velit
          voluptate id. Fugiat velit sint adipisicing aliquip quis culpa dolor
          ea laborum labore elit ut magna cupidatat.
        </p>
        <p>
          Adipisicing aliqua magna est aliquip laborum ullamco excepteur
          exercitation irure. Irure consequat cupidatat quis qui qui laboris
          esse. Et consequat sit reprehenderit exercitation anim aute aute non
          veniam et ut ut. Commodo aute occaecat sunt tempor nostrud dolore est
          consectetur et excepteur aute ex. Cupidatat commodo ea nisi magna anim
          commodo.
        </p>

        <br></br>
        <button
          className="btn-count"
          onClick={() => {
            console.log(
              this.setState((prevState) => {
                return {
                  count: prevState.count + 1,
                };
              })
            );
          }}
        >
          Change
        </button>
        <h1 align="center">{this.state.count}</h1>

        <br></br>
      </div>
    );
  }
}

export default About;
