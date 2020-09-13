import React, { Component } from "react";
import "./Header.css";
import "./MenuItems";
import { MenuItems } from "./MenuItems";
/* import { Button } from './Button'; */
import { NavLink, Switch, Route } from 'react-router-dom';

class Header extends Component{
    state = {clicked: false }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        
        return (
        
            
               <nav className="NavbarItems">
                   <h1 className="navbar-logo">
                   Data Analysis</h1>
                   <div className="menu-icon" onClick={this.handleClick}>
                       <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                       
                    </div>
                    <switch>
                    <ul className={this.state.clcked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (<li key={index}><NavLink to={item.url}  className={item.cName}  >{item.title}</NavLink ></li>)
                        })}
                    </ul>
                    </switch>
               </nav>
            
        );
    }
}

export default (Header);