import React, { Component } from 'react';
import './Post.css';
import { stockData } from '../data/Data';

class Post extends Component{
    render(){
        var c_date = new Date();
        return(
            <div className="post">
                <h3 className="date">Posts made on {c_date.getDate()+"/"+c_date.getMonth()+"/"+c_date.getFullYear()}</h3>
                
{stockData.map((data, key) => {
          return (
            <p key={key}>
              {data.company +
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