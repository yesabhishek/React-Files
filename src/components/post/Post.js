import React, { Component } from 'react';
import './Post.css';
import { stateData } from '../data/Data';

class Post extends Component{
    render(){
        var c_date = new Date();
        return(
            <div className="post">
                <h3 className="date">Posts made on {c_date.getDate()+"/"+c_date.getMonth()+"/"+c_date.getFullYear()}</h3>
                
{stateData.map((data, key) => {
          return (
            <p key={key}>
              {data.state +
                " , " +
                data.ticker +
                " ," +
                data.stockPrice +
                ", " +
                data.timeElapsed}
            </p>
          ); })}
            </div>
        )
            
    }
}


export default Post