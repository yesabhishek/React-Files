import React, { Component } from "react";
import Body from "../components/body/Body";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Notes from "../components/notes/Notes";
import Card from "../components/contact-cards/Card"
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import About from '../components/about/About';
import Posts from '../components/post/Post';

export default class Main extends Component {
    render() {
      return (
        
        <div className="container">
          <Router>
            <Header />
            <switch>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/' component={Body}></Route>
            <Route exact path='/posts' component={Posts}></Route>
            </switch>
            <Footer />
          </Router>  
            
            
        </div>
      );
    }
  }
  