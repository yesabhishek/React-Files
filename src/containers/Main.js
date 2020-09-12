import React, { Component } from "react";
import Body from "../components/body/Body";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


export default class Main extends Component {
    render() {
      return (
        <div className="container">
            <Header />
            <Body />
            <Footer />
        </div>
      );
    }
  }
  