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
                    <svg xmlns="http://www.w3.org/2000/svg" id="btn-theme" cursor="pointer" onClick={() =>{
                        console.log("Ye mereko dabaya")
                    }} width="34" height="34" viewBox="0 0 24 24"><path d="M22.088 13.126l1.912-1.126-1.912-1.126c-1.021-.602-1.372-1.91-.788-2.942l1.093-1.932-2.22-.02c-1.185-.01-2.143-.968-2.153-2.153l-.02-2.219-1.932 1.093c-1.031.583-2.34.233-2.941-.788l-1.127-1.913-1.127 1.913c-.602 1.021-1.91 1.372-2.941.788l-1.932-1.093-.02 2.219c-.01 1.185-.968 2.143-2.153 2.153l-2.22.02 1.093 1.932c.584 1.032.233 2.34-.788 2.942l-1.912 1.126 1.912 1.126c1.021.602 1.372 1.91.788 2.942l-1.093 1.932 2.22.02c1.185.01 2.143.968 2.153 2.153l.02 2.219 1.932-1.093c1.031-.583 2.34-.233 2.941.788l1.127 1.913 1.127-1.913c.602-1.021 1.91-1.372 2.941-.788l1.932 1.093.02-2.219c.011-1.185.969-2.143 2.153-2.153l2.22-.02-1.093-1.932c-.584-1.031-.234-2.34.788-2.942zm-10.117 6.874c-4.411 0-8-3.589-8-8s3.588-8 8-8 8 3.589 8 8-3.589 8-8 8zm6.029-8c0 3.313-2.687 6-6 6s-6-2.687-6-6 2.687-6 6-6 6 2.687 6 6z"/></svg>
               </nav>
            
        );
    }
}

export default (Header);